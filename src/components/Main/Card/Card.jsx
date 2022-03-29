import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Card.module.css";
import api from "../../../utils/Api";

const Card = (props) => {
  const navigate = useNavigate();
  const goCourse = () =>
    api.getCourse(props.id).then((res) => navigate("/course", { state: res }));
  return (
    <div
      key={props.id}
      className={`${Style["slider__card"]} ${
        props.dopClass ? props.dopClass : ""
      }`}
    >
      <div className={Style["slider__card-container"]}>
        <h2 className={Style["slider__card-title"]}>{props.title}</h2>
        <p className={Style["slider__card-description"]}>{props.description}</p>
        <div>
          <p className={Style["slider__card-time"]}>
            Длительность: {props.time} мес.
          </p>
          <button className={Style["slider__about_button"]} onClick={goCourse}>
            {props.button}
          </button>
        </div>
      </div>
      <img
        src={props.img}
        alt={props.title}
        className={Style["slider__card-img"]}
      />
    </div>
  );
};

export default Card;
