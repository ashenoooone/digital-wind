import React from "react";
import Style from "./Theory.module.css";
import TheoryItem from "./TheoryItem/TheoryItem";
import { useLocation } from "react-router-dom";
const Theory = () => {
  const info = useLocation().state;
  return (
    <div className={Style["content"]}>
      <h1 className={Style["course__title"]}>{info.title}</h1>
      <div className={Style["course__items"]}>
        {info.modules.map((item, id) => {
          return (
            <TheoryItem
              key={id}
              id={item.id}
              level={item.levelName}
              title={item.title}
              module={item.courseModuleHeaders}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Theory;
