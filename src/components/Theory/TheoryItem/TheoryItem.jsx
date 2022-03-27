import React from "react";
import acordionImg from "../../../images/courseButtonUp.svg";
import Style from "../Theory.module.css";
import Acordion from "./Acordion/Acordion";

const TheoryItem = (props) => {
  const [openAccordion, setOpenAccordion] = React.useState(false);
  return (
    <div
      className={`${Style["course__item"]} ${openAccordion && Style["height"]}`}
    >
      <div className={Style["course__container"]}>
        <div className={Style["course__content"]}>
          <h2 className={Style["course__content-title"]}>{props.level}</h2>
          <p className={Style["course__content-number"]}>
            {props.module} модулей
          </p>
        </div>
        <div className={Style["course__acordion"]}>
          <img
            src={acordionImg}
            alt="кнопка акордиона"
            className={Style["course__acordion-img"]}
            onClick={() => setOpenAccordion(!openAccordion)}
          />
          <h2 className={Style["course__acordion-title"]}>{props.title}</h2>
        </div>
        <div
          className={`${Style["course__info"]} ${
            openAccordion && Style["course__info_active"]
          }`}
        >
          {props.content.map((item) => (
            <Acordion title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheoryItem;