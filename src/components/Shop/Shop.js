import React from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = ({ products, handleAddToCart }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></Product>
      ))}
    </div>
  );
};

export default Shop;
