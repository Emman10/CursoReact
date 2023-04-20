import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext(null)

const ShoppingCartPovider = ({children}) => {
    const [cart, setCart] = useState([])

    //Agregar al carrito
    const addItem = (item, quantity) => {

      let newCart;
      //Verificamos si ya existe el producto en el carrito
      let alfajor = cart.find(alfajor => alfajor.id === item.id)

      if (alfajor) {
        alfajor.quantity += quantity;
        newCart = [...cart]
      } else {
        alfajor = {...item, quantity: quantity}
        newCart = [...cart, alfajor]
      }
      setCart(newCart)
    }

    //Cantidad total en CardWidget
    const totalQuantity = cart.reduce((acc, currItem) => {
      return acc + currItem.quantity;
    }, 0)

    
  return (
    <CartContext.Provider value={{cart, setCart, addItem, totalQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartPovider