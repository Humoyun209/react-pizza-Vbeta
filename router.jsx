import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import CatalogPage from "./pages/CatalogPage"
import Layout from "./components/Layout"
import BasketPage from "./pages/BasketPage"
import NotFoundPage from "./pages/NotFoundPage"

const pizza_url = 'https://file.notion.so/f/s/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1694203200000&signature=JVzQv_wrJQktJlPl3ijc1gsXxa3hzkesEjUWhtmUqww&downloadName=pizzas.json'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={ <CatalogPage/> } />
        <Route path='basket' element={ <BasketPage /> }/>
        <Route path='*' element={ <NotFoundPage /> } />
      </Route> 
    )
  )

export {router, pizza_url}