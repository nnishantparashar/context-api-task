import React, { useContext} from "react";
import {ProductContext } from "../App";

const Item = (props) => {
  const context  = useContext(ProductContext);
  

 

  return (
    <div key={props.product.id} className="product">
      <img src={props.product.thumbnail} alt={props.product.title} />
      <div>
        <h4>{props.product.title}</h4>
        <p>Description: {props.product.description}</p>
        <p>Price: &#x24; {props.product.price}</p>
        <button onClick={() => context.addToCart(props.product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
