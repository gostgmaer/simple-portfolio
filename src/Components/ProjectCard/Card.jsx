import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="Card">
      <div className="cardWrapper">
        <div className="cardImage">
          <img src={item?.urls.regular} alt="" />
          <div className="cardContent">
          <span className="cardHeading">
            <h3>{item?.alt_description}</h3>
          </span>
          <div className="Carddetails"></div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Card;
