import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [category, setCategory] = useState(6);
  const [sortId, setSortId] = useState(0);

  const filterContext = {
    category,
    setCategory,
    sortId,
    setSortId,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
