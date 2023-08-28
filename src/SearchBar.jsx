import React, { useState } from "react";

function SeachBar() {
  const [searchBar, SetsearchBar] = useState(" ");
  const HandleseachBar = (e) => SetsearchBar(e.target.value);

  return (
    <>
      <div className="searchBox">
        <div className="bar">
          <i className="fas fa-bars"></i>
        </div>
        <nav className="navBar">
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Services">Services</a>
          <a href="Help">Help</a>
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
