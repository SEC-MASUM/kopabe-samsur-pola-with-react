import React from "react";
import "./Cart.css";

const Cart = ({ cartItem }) => {
  const { name, price, img } = cartItem;
  return (
    <div className="cart-container">
      <div className="cart-image-container">
        <img src={img} alt="" />
      </div>
      <div className="cart-gun-info">
        <h1>{name}</h1>
        <p>Price: $ {price}</p>
      </div>
    </div>
  );
};

export default Cart;
