import React from "react";
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price);
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.price} PKR</span>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: {calculateTotalPrice()} PKR</p>
        </>
      )}
    </div>
  );
}

export default Cart;
