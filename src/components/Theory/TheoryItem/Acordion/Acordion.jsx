import React from "react";
import Style from "../../Theory.module.css";

const Acordion = (props) => {
  return (
    <div className={Style["course__info-item"]}>
      <h2 className={Style["course__info-title"]}>{props.title}</h2>
      <div className={Style["course__info-img"]}></div>
    </div>
  );
};

export default Acordion;
