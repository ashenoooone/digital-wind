import React from "react";
import acordionImg from "../../../images/courseButtonUp.svg";
import Style from "../Theory.module.css";
import Acordion from "./Acordion/Acordion";

const TheoryItem = (props) => {
  const [openAccordion, setOpenAccordion] = React.useState(false);
  const data = props.module.sort((a, b) => a.id - b.id);
  return (
    <div
      className={`${Style["course__item"]} ${openAccordion && Style["height"]}`}
    >
      <div className={Style["course__container"]}>
        <div className={Style["course__content"]}>
          <h2 className={Style["course__content-title"]}>{props.level}</h2>
          <p className={Style["course__content-number"]}>
            {props.module ? props.number + " " : "0 "}
            модулей
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
          {data.map((item) => {
            return (
              <Acordion
                key={item.id}
                id={item.id}
                status={item.status}
                courseId={props.courseId}
                title={item.title}
                level={props.level}
                content={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheoryItem;
