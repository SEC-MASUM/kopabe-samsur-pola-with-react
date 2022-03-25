import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
const Navbar = ({ cartItems, toggleModel }) => {
  return (
    <div className="navbar">
      <h1>Kopabe Samsur Pola</h1>
      <div className="cart-counter" onClick={toggleModel}>
        <span>{cartItems.length}</span>
        <BsFillCartFill className="icon" color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
