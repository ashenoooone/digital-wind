import React from "react";
import Style from "../Course.module.css";
import courseButtonUp from "../../../images/courseButtonUp.svg";

const CourseTheory = (props) => {
  const [isAnimate, setAnimate] = React.useState(false);
  return (
    <div
      className={`${Style["theory__course-container"]} ${
        isAnimate && Style["theory_active"]
      }`}
    >
      <div className={Style["theory__course-info"]}>
        <h2 className={Style["theory__course-title"]}>{props.title}</h2>
        <img
          src={courseButtonUp}
          alt="Знак для октрытия информации внутри курсов"
          className={`${Style["theory__course-button"]} ${
            isAnimate && Style["theory__course-button_rotate"]
          }`}
          onClick={() => setAnimate(!isAnimate)}
        />
      </div>
      <div
        className={`${Style["theory__list"]} ${
          !isAnimate && Style["theory_disabled"]
        }`}
      >
        {props.header.map((item, id) => {
          return (
            <div key={id}>
              <h2 className={Style["theory__list-title"]}>{item.title}</h2>
              <ul>
                {item.courseModuleHeaderSteps.map((el, elementId) => {
                  return (
                    <li key={elementId} className={Style["theory__list-text"]}>
                      {el.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTheory;
