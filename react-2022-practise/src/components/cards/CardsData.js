import React from "react";

const CardsData = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={props.cardsData.image}
          alt="Card image cap"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardsData.title}</h5>
          <p className="card-text">{props.cardsData.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default CardsData;
