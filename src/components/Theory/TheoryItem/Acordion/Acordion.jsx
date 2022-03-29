import React from "react";
import Style from "../../Theory.module.css";
import { useNavigate } from "react-router-dom";

const Acordion = (props) => {
  const navigate = useNavigate();
  const goToInformativePage = () =>
    navigate("/description", {
      state: {
        description: props.content,
        title: props.title,
        level: props.level,
      },
    });

  return (
    <div className={Style["course__info-item"]} onClick={goToInformativePage}>
      <h2 className={Style["course__info-title"]}>{props.title}</h2>
      <div className={Style["course__info-img"]}></div>
    </div>
  );
};

export default Acordion;
