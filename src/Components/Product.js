import React from "react";
import formatPrice from "../helpers/formatPrice";

function Product(props) {
  const { name, img, price, description, addToCart, item } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {formatPrice(price)}</p>
      <img src={img} alt={name} />

      <p>{description}</p>

      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  );
}

export default Product;
