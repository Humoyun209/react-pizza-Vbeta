import { Fragment, useContext, useEffect, useReducer, useState } from "react";
import Catalog from "../components/catalog/Catalog";
import Categories from "../components/catalog/Categories";
import Navbar from "../components/catalog/Navbar";
import { pizza_json } from "../pizza";
import { FilterContext } from "../context/FilterContext";
import Pagination from "../components/catalog/Pagination";
import { getDataByPage, getPagination } from "../service/service";

const CatalogPage = () => {
  const context = useContext(FilterContext);
  const [filteredPizza, setFilteredPizza] = useState(pizza_json);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(pizza_json)

  let { sortId, category } = context;

  useEffect(() => {
    let data = [...pizza_json];

    data = data.filter((elem) => elem.category === category)

    if (context.category === 6) {
      data = [...pizza_json];
    }

    if (sortId === 0) {
      data.sort((a, b) => {
        return b.rating - a.rating;
      });
    }

    if (sortId === 1) {
      data.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (sortId === 2) {
      data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }

    if (category !== 6) {
      setPage(1)
    }
    setFilteredPizza(data)

    data = getDataByPage(page, [...data]);
    setPageData(data)

  }, [category, sortId, page]);

  return (
    <Fragment>
      <Navbar />
      <Categories />
      <Catalog pizzas={filteredPizza.length <= 4 ? filteredPizza : pageData} />
      {filteredPizza.length > 4 ? (
        <Pagination
          numbers={getPagination(filteredPizza)}
          indexPage={page}
          setPage={setPage}
        />
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default CatalogPage;
