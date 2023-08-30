import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import imageSrc1 from "./assets/download (1).jpg";
import imageSrc2 from "./assets/fastFood.jpg";
import imageSrc3 from "./assets/chinese.jpg";
import imageSrc4 from "./assets/continental.jpg";
import imageSrc5 from "./assets/deserts.jpg";
import imageSrc6 from "./assets/bbq.jpg";
import Cards from "./Cards";
import Categories from "./categories";
import SeachBar from "./SearchBar";

import About from "./About";
import Services from "./Services";
import Help from "./Help";

import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <SeachBar />
      <h1 className="tagLine">Delivering Cravings at Your Convenience</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/categories/:category"
          element={
            <Categories cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Cards
        imgsrc={imageSrc2}
        title={"Fast Food"}
        to="/categories/fast-food"
      />
      <Cards imgsrc={imageSrc1} title={"Desi"} to="/categories/desi" />
      <Cards imgsrc={imageSrc3} title={"Chinese"} to="/categories/chinese" />
      <Cards
        imgsrc={imageSrc4}
        title={"Continental"}
        to="/categories/continental"
      />
      <Cards imgsrc={imageSrc6} title={"BBQ"} to="/categories/bbq" />
      <Cards imgsrc={imageSrc5} title={"Deserts"} to="/categories/deserts" />
    </>
  );
}

export default App;
