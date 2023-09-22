import { Fragment, useContext, useEffect, useState } from "react";
import Catalog from "../components/catalog/Catalog";
import Categories from "../components/catalog/Categories";
import Navbar from "../components/catalog/Navbar";
import { pizza_json } from "../pizza";
import { FilterContext } from "../context/FilterContext";
import Pagination from "../components/catalog/Pagination";
import { getDataByPage, getPagination } from "../service/service";
import { filterByCategory, filterByParams } from "../service/filters";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const { sortId, category } = useContext(FilterContext);
  const [params, setParams] = useSearchParams()

  const [filteredPizza, setFilteredPizza] = useState(pizza_json);
  const [pageData, setPageData] = useState(pizza_json)


  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(params.get('page') ? parseInt(params.get('page')) : 1)
  }, [])

  useEffect(() => {
    let data = [...pizza_json];

    data = filterByCategory(data, category, pizza_json)
    data = filterByParams(data, sortId)

    setFilteredPizza(data)

    data = getDataByPage(page, [...data]);

    if (!data.length) {
      setPage(1)
    }

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
        <div className="mt-[90px]"></div>
      )}
    </Fragment>
  );
};

export default CatalogPage;
