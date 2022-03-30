import React from "react";
import Style from "./Theory.module.css";
import TheoryItem from "./TheoryItem/TheoryItem";
import { useLocation } from "react-router-dom";
const Theory = () => {
  let { title, modules } = useLocation().state;
  modules = modules.sort((a, b) => {
    return a.id - b.id;
  });
  return (
    <div className={Style["content"]}>
      <h1 className={Style["course__title"]}>{title}</h1>
      <div className={Style["course__items"]}>
        {modules.map((item) => {
          return item.courseModuleHeaders.map((el) => {
            return (
              <TheoryItem
                key={el.id}
                id={el.id}
                courseId={item.id}
                level={item.levelName}
                title={el.title}
                number={el.courseModuleHeaderSteps.length}
                module={el.courseModuleHeaderSteps}
                // modules={info.modules}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Theory;
