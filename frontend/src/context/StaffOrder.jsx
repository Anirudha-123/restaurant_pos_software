import { createContext, useContext, useState } from "react";



const StaffOrderContext = createContext()


export const useCart = () => useContext(StaffOrderContext)


export const StaffOrderContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addToCart =(item) => {

     setCart((prev) => [...prev,item])
  }


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  return <StaffOrderContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</StaffOrderContext.Provider>
}