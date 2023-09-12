import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { BasketContextProvider } from './context/BasketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </BasketContextProvider>
  </React.StrictMode>,
)
