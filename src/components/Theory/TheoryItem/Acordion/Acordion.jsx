import React from "react";
import Style from "../../Theory.module.css";
import { Link, useNavigate } from "react-router-dom";
import unLock from "../../../../images/unLock.svg";
import lock from "../../../../images/lock.svg";

const Acordion = (props) => {
  return (
    <Link
      className={`${Style["course__info-link"]} ${
        !props.status && Style["disable"]
      }`}
      to={`/description/${props.courseId}/${props.level}/${props.id}`}
    >
      <div
        className={`${Style["course__info-item"]} ${
          !props.status && Style["course__info-item_disable"]
        }`}
      >
        <h2 className={Style["course__info-title"]}>{props.title}</h2>
        <img
          src={props.status ? unLock : lock}
          alt="статус курса"
          className={Style["course__info-img"]}
        />
      </div>
    </Link>
  );
};

export default Acordion;
