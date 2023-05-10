import React, { createContext, useContext, useState} from 'react';

export const CartContext = createContext('');

function CartProvider({ children , dish}) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(dish) {
    setCartItems(prevCartItems => [...prevCartItems, dish]);
  }
  
  return (
    <CartContext.Provider value={{cartItems, setCartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const cartDish = useContext(CartContext)

  return cartDish;
}

export {CartProvider, useCart}
