import React from "react";
import "./card.css";

const Card = ({ title, content }) => {
  return (
    <div className="card1">
      <h1>{title}</h1>
      <p>{content} </p>
    </div>
  );
};

export default Card;
