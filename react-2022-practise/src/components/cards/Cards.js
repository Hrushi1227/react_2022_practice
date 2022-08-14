import React from "react";
import CardsData from "./CardsData";
import "./cards.css";
import inputDataForCard from "./inputDataForCards.json";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {inputDataForCard.map((evt, key) => (
            <div className="col-sm-4" key={key}>
              <CardsData cardsData={evt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
