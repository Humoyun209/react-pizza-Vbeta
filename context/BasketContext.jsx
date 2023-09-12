import { createContext, useState } from "react"

const BasketContext = createContext({
    dataCart: null,
    setDataCart: null,

    sumQuantity: null,
    setSumQuantity: null,

    sumPrice: null,
    setSumPrice: null
})

const BasketContextProvider = ({children}) => {
  const [dataCart, setDataCart] = useState([])
  const [sumQuantity, setSumQuantity] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)

  const contextData = {
    dataCart,
    setDataCart,

    quantity,
    setQuantity,

    sumQuantity,
    setSumQuantity,

    sumPrice,
    setSumPrice
  }
  
  return (
    <BasketContext.Provider value={contextData}>
        {children}
    </BasketContext.Provider>
  )
}

export { BasketContext, BasketContextProvider }