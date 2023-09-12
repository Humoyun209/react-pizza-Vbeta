import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {router} from './router'
import './styles.css'

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
