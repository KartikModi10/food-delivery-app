import React, { useEffect } from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState(localStorage.getItem("cartProducts")? JSON.parse(localStorage.getItem("cartProducts")): [])

    useEffect(() => {
      localStorage.setItem("cartProducts", JSON.stringify(cartItem))
    }, [cartItem])
    

  return (
    <CartContext.Provider value={{cartItem, setCartItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider