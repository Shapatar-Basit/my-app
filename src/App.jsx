import React from "react";
import "./index.css";
import imageSrc1 from "./assets/download (1).jpg";
import imageSrc2 from "./assets/fastFood.jpg";
import imageSrc3 from "./assets/chinese.jpg";
import imageSrc4 from "./assets/continental.jpg";
import imageSrc5 from "./assets/deserts.jpg";
import imageSrc6 from "./assets/bbq.jpg";
import Cards from "./Cards";
import Desi, { BBQ, Chinese, Continental, FastFood } from "./Data";
import SeachBar from "./SearchBar";

function App() {
  return (
    <>
      <SeachBar />
      <h1 className="tagLine">Delivering Cravings at Your Convenience</h1>
      <Cards imgsrc={imageSrc2} title={"Fast Food"} />
      <Cards imgsrc={imageSrc1} title={"Desi"} />
      <Cards imgsrc={imageSrc3} title={"Chinese"} />
      <Cards imgsrc={imageSrc4} title={"Continental"} />
      <Cards imgsrc={imageSrc6} title={"BBQ"} />
      <Cards imgsrc={imageSrc5} title={"Deserts"} />
      {/* <Images /> */}
      {/* <Categories /> */}
    </>
  );
}
export default App;
