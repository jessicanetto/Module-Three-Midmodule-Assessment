import React from "react";
import Product from "./Product";
import "./Products.css";

function Products({ data, addToCart }) {
  return (
    <div className="Products">
      {data.map((item) => {
        return <Product key={item.id} name={item.name} img={item.img} price={item.price} description={item.description} item={item} addToCart={addToCart} />;
      })}
    </div>
  );
}

export default Products;
