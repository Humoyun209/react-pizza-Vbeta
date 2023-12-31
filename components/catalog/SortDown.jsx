import { useContext, useEffect, useState } from "react";
import { sorts } from "../../pizza";
import { FilterContext } from "../../context/FilterContext";
import { useSearchParams } from "react-router-dom";
import { createOrSetQueryParam } from "../../service/filters";

const SortDown = () => {
  const [openList, setOpenList] = useState(false);
  const context = useContext(FilterContext);
  const { sortId, setSortId } = context;
  const [params, setParams] = useSearchParams()

  const handleChangeSort = (event) => {
    setOpenList(false);
    setSortId(parseInt(event.target.dataset.index));
  };

  useEffect(() => {
    setSortId(sorts.findIndex(e => e.name === params.get('sortBy')))
  }, [])

  useEffect(() => {
    setParams(() => {
      return createOrSetQueryParam(params, sorts[sortId].name, 'sortBy')
    })
  }, [sortId])

  return (
    <div style={{ marginRight: "50px" }}>
      <div
        onClick={() => setOpenList(true)}
        className="text-[#FE5F1E] text-[14px] leading-[14.05px] cursor-pointer border-[#FE5F1E] border-dotted border-b-[2px] pb-[3px] hover:bg-[#fff7f3]"
      >
        {params.get('sortBy') || sorts[sortId].name}
      </div>
      <div
        onPointerLeave={() => setOpenList(false)}
        className={`${
          openList
            ? "absolute z-10 pt-2 bg-white flex flex-col shadow-[rgba(0,0,0,0.09)]"
            : "hidden"
        }`}
      >
        {
          sorts.map((elem) => (
             <span
             key={elem.id}
              onClick={handleChangeSort}
              data-index={elem.id}
              className="pl-[5px] cursor-pointer py-[11px] text-[14px] tracking-normal leading-[17.05px] text-[#000000] text-start hover:font-bold hover:text-[#FE5F1E] hover:bg-[#fff7f3]"
            >
              {elem.name}
            </span>
          ))
        }
       
      </div>
    </div>
  );
};

export default SortDown;
