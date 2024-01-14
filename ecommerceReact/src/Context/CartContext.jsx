import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    
  
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
    
  }

  const clearCart = () => {
    setCart([])
  }

  const itemsInCart = () => {
    return cart .reduce((acc, item) => acc + item.cantidad, 0)
  }

  const totalCart = () => {
    return cart .reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
  }

    return (
        <CartContext.Provider value={{
        cart,
        isInCart,
        addToCart,
        clearCart,
        itemsInCart,
        totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}