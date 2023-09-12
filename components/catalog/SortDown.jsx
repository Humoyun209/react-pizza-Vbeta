import { useContext, useState } from "react";
import { sorts } from "../../pizza";
import { FilterContext } from "../../context/FilterContext";

const SortDown = () => {
  const [openList, setOpenList] = useState(false);
  const context = useContext(FilterContext);
  const { sortId, setSortId } = context;

  const handleChangeSort = (event) => {
    setOpenList(false);
    setSortId(parseInt(event.target.dataset.index));
  };

  return (
    <div style={{ marginRight: "50px" }}>
      <div
        onClick={() => setOpenList(true)}
        className="text-[#FE5F1E] text-[14px] leading-[14.05px] cursor-pointer border-[#FE5F1E] border-dotted border-b-[2px] pb-[3px] hover:bg-[#fff7f3]"
      >
        {sorts[sortId].name}
      </div>
      <div
        onPointerLeave={() => setOpenList(false)}
        className={`${
          openList
            ? "absolute z-10 pt-2 bg-white flex flex-col shadow-[rgba(0,0,0,0.09)]"
            : "hidden"
        }`}
      >
        <span
          onClick={handleChangeSort}
          data-index={0}
          className="pl-[5px] cursor-pointer py-[11px] text-[14px] tracking-normal leading-[17.05px] text-[#000000] text-start hover:font-bold hover:text-[#FE5F1E] hover:bg-[#fff7f3]"
        >
          популярности
        </span>
        <span
          onClick={handleChangeSort}
          data-index={1}
          className="pl-[5px] cursor-pointer py-[11px] text-[14px] tracking-normal leading-[17.05px] text-[#000000] text-start hover:font-bold hover:text-[#FE5F1E] hover:bg-[#fff7f3]"
        >
          по цене
        </span>
        <span
          onClick={handleChangeSort}
          data-index={2}
          className="pl-[5px] cursor-pointer py-[11px] text-[14px] tracking-normal leading-[17.05px] text-[#000000] text-start hover:font-bold hover:text-[#FE5F1E] hover:bg-[#fff7f3]"
        >
          по алфавиту
        </span>
      </div>
    </div>
  );
};

export default SortDown;
