import { useContext, useEffect } from "react";
import CategoryButton from "../UI/CategoryButton";
import SortDown from "./SortDown";
import { categories } from "../../pizza";
import { FilterContext } from "../../context/FilterContext";
import { useSearchParams } from "react-router-dom";
import { createOrSetQueryParam } from "../../service/filters";

const Categories = () => {
  const {setCategory, category} = useContext(FilterContext);
  
  const [params, setParams] = useSearchParams()
  useEffect(() => {
    setParams(() => {
      return createOrSetQueryParam(params, category, 'category')
  })
  }, [category])

  return (
    <section className="mt-[94px] flex justify-between items-center flex-col lg:flex-row gap-5">
      <div className="flex justify-start gap-[8.95px] flex-wrap">
        {categories.map((elem) => (
          <CategoryButton
            handleClick={() => {setCategory(elem.id)}}
            cat={category}
            key={elem.id}
            ind={elem.id}
          >
            {elem.name}
          </CategoryButton>
        ))}
      </div>
      <div className="flex gap-[10px] min-w-[290px]">
        <span className="mt-[5px]">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </span>
        <p className="font-bold text-[14px] leading-[14.05px] text-[#2C2C2C]">
          Сортировка по:
        </p>
        <div>
          <SortDown />
        </div>
      </div>
    </section>
  );
};

export default Categories;
