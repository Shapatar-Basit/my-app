import React from "react";
import imageSrc1 from "./assets/download (1).jpg";
import imageSrc2 from "./assets/fastFood.jpg";
import imageSrc3 from "./assets/chinese.jpg";
import imageSrc4 from "./assets/continental.jpg";
import imageSrc5 from "./assets/deserts.jpg";
import imageSrc6 from "./assets/bbq.jpg";
import Desi, { BBQ, Chinese, Continental, FastFood } from "./Data";
import "./index.css";
console.log(Desi);
console.log(BBQ);
function Cards(props) {
  return (
    <>
      <div className="outerDivPic">
        <div className="innerDiv">
          <div className="innerDiv2">
            <div className="card">
              {/* {Ternary=selectedImage==1?  */}
              {/* <Link to={`/categories/${imageId}`}></Link> */}
              <img
                className="img1"
                src={props.imgsrc}
                // onClick={() => handleImage(1)}
              />
              <div className="card-info">
                <h3 className="card-name">{props.title}</h3>
                <button className="card-button">Browse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
