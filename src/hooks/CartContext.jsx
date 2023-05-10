import React, { createContext, useContext, useState} from 'react';

export const CartContext = createContext('');

function CartProvider({ children , dish}) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(dish) {
    setCartItems(prevCartItems => [...prevCartItems, dish]);
    notification();
  }

  function notification(){
    alert("Prato adicionado ao carrinho!");
  }

  function removeFromCart(dish) {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== dish.id));
  }
  
  return (
    <CartContext.Provider value={{cartItems, setCartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const cartDish = useContext(CartContext)

  return cartDish;
}

export {CartProvider, useCart}
