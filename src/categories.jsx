import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Categories.css";
import Desi, { BBQ, Chinese, Continental, FastFood } from "./Data";
import Cart from "./Cart";

function Categories({ cartItems, setCartItems }) {
  const { category } = useParams();

  let items = [];
  let pageTitle = "";

  switch (category) {
    case "desi":
      items = Desi;
      pageTitle = "Desi Menu";
      break;
    case "bbq":
      items = BBQ;
      pageTitle = "BBQ Menu";
      break;
    case "chinese":
      items = Chinese;
      pageTitle = "Chinese Menu";
      break;
    case "continental":
      items = Continental;
      pageTitle = "Continental Menu";
      break;
    case "fast-food":
      items = FastFood;
      pageTitle = "Fast Food Menu";
      break;
    default:
      break;
  }

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName, itemPrice) => {
    setSelectedItem({ name: itemName, price: itemPrice });
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      setCartItems([...cartItems, selectedItem]);
      setSelectedItem(null);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1 className="category-title">{pageTitle}</h1>
      <div className="MenuTable">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((categoryData, index) => (
              <React.Fragment key={index}>
                <tr className="category-header">
                  <th colSpan="3">{categoryData.category}</th>
                </tr>
                {categoryData.items.map((item, itemIndex) => (
                  <tr
                    key={`${index}-${itemIndex}`}
                    onClick={() =>
                      handleItemClick(item, categoryData.price[itemIndex])
                    }
                  >
                    <td>{itemIndex + 1}</td>
                    <td>{item}</td>
                    <td>{categoryData.price[itemIndex]}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {selectedItem && (
        <div className="selected-item-container">
          <p>Selected Item: {selectedItem.name}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default Categories;
