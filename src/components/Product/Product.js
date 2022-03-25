import React from "react";
import "./Product.css";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
//   console.log(product);
  const { name, img, bullet, capacity, action, price } = product;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {capacity}</p>
        <p>Action : {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(product)}>
          <BsFillCartFill className="icon"></BsFillCartFill>
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Product;
