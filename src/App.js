import React, { createContext, useState } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Product } from "./data";

export const ProductContext = createContext();

export default function App() {
  const [state, setState] = useState({
    products: Product,
    cart: []
  });
 
 

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }]
    });
    
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };

  return (
    <ProductContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
      <div className="App">
        <h1>Context Api Task</h1>
       
        <Routes>
        <Route exact path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
       
      </div>
    </ProductContext.Provider>
  );
}
