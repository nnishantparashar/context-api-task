import React, { useContext} from "react";
import { Link } from "react-router-dom";
import {ProductContext } from "../App";
import Item from "./Item";


const Products = () => {
  const context = useContext(ProductContext);
  

  const totalCartCount = context.state.cart.reduce(
    (total, product) => (total = total + product.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Products</span>
        <Link to="/cart">My Cart({totalCartCount})</Link>
      </h2>
      
      {context.state.products.map((product) => {
          return <Item product={product} key={product._id} />;
        })}
     
    </div>
  );
};

export default Products;
