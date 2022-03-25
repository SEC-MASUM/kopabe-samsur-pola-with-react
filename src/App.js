import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    hight: "300px",
    maxHeight: "600px",
    overflowY: "auto",
  },
};

Modal.setAppElement("#root");

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    // console.log("clicked", product);
  };
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>Close</button>
          {cartItems.map((cartItem) => (
            <Cart cartItem={cartItem} key={cartItem.id}></Cart>
          ))}
        </Modal>
      </div>
      <Shop products={products} handleAddToCart={handleAddToCart}></Shop>
    </div>
  );
}

export default App;
