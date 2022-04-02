import React from "react";
import Style from "../../Theory.module.css";
import { Link, useNavigate } from "react-router-dom";

const Acordion = (props) => {
  return (
    <Link
      className={Style["course__info-link"]}
      to={`/description/${props.courseId}/${props.level}/${props.id}`}
    >
      <div className={Style["course__info-item"]}>
        <h2 className={Style["course__info-title"]}>{props.title}</h2>
        <div className={Style["course__info-img"]}></div>
      </div>
    </Link>
  );
};

export default Acordion;
