import React, { useState } from "react";
import { Link } from "react-router-dom";

function SeachBar() {
  const [searchBar, SetsearchBar] = useState("");
  const HandleseachBar = (e) => SetsearchBar(e.target.value);

  return (
    <>
      <div className="searchBox">
        <div className="bar">
          <i className="fas fa-bars"></i>
        </div>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/help">Help</Link>
        </nav>
        <input
          placeholder="Search"
          type="text"
          value={searchBar}
          onChange={HandleseachBar}
        />
        <i className="fas fa-search"></i>
      </div>
    </>
  );
}
export default SeachBar;
