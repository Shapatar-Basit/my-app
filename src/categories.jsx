import React from "react";
// import { useState } from "react";
import Desi from "./Desi";
import "./Categories.css";

function Categories(props) {
  // const imageId = props.match.params.imageId;
  const items = Desi();
  return (
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
          {items.map((category, index) => (
            <React.Fragment key={index}>
              <tr>
                <th colSpan="3">{category.category}</th>
              </tr>
              {category.items.map((item, itemIndex) => (
                <tr key={`${index}-${itemIndex}`}>
                  <td>{itemIndex + 1}</td>
                  <td>{item}</td>
                  <td>{category.price[itemIndex]} </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>price</th>
          </tr>
          <tr>
            {items.map((category) => (
              <th key={category.category}>{category.category}</th>
            ))}
          </tr>
        </thead>
        {items.map((category, index) => (
          <tbody>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.items}</td>
              <td>{category.items.join(", ")}</td>
            </tr>
          </tbody>
        ))}
      </table> */}
    </div>
  );
}

export default Categories;
