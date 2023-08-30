import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Cards(props) {
  return (
    <div className="outerDivPic">
      <div className="innerDiv">
        <div className="innerDiv2">
          <Link to={props.to} className="card">
            <img className="img1" src={props.imgsrc} alt={props.title} />
            <div className="card-info">
              <h3 className="card-name">{props.title}</h3>
              <p className="card-browse">Browse</p> {/* New element */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
