import { Fragment, useContext, useEffect, useReducer, useState } from "react";
import Catalog from "../components/catalog/Catalog";
import Categories from "../components/catalog/Categories";
import Navbar from '../components/catalog/Navbar'
import { pizza_json } from "../pizza";
import { FilterContext } from "../context/FilterContext";

const CatalogPage = () => {
  const context = useContext(FilterContext)
  
  const [pizzas, setPizzas] = useState(pizza_json)
  const[filterdPizza, setFilteredPizza] = useState(pizzas)

  let {sortId, category} = context


  useEffect( () => {
    let data = [...pizzas]

    data = data.filter((elem) => elem.category === category)
    
    if (context.category === 6) {
      data = [...pizzas]
    }

    if (sortId === 0) {
      data.sort((a, b) => {
        return b.rating - a.rating
      })
    }

    if (sortId === 1) {
      data.sort((a, b) => {
        return a.price - b.price
      })
      
    }

    if (sortId === 2) {
      data.sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
      
    }

    setFilteredPizza(data)
  }, [category, sortId])
  
  return (
    <Fragment>
      <Navbar />
      <Categories />
      <Catalog  pizzas={filterdPizza}/>
    </Fragment>
  );
}

export default CatalogPage
