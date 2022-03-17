import React from "react";

const Card = (props) => {
  return (
    <div className="slider__card">
      <div className="slider__card-container">
        <h2 className="slider__card-title">{props.title}</h2>
        <p className="slider__card-description">{props.description}</p>
        <p className="slider__card-time">{props.time}</p>
        <button className="slider__about-button">Подробнее о курсе</button>
      </div>
      <img src={props.img} alt={props.title} className="slider__card-img" />
    </div>
  );
};

export default Card;
