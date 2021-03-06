import React from "react";
import Style from "./Course.module.css";
import courseImage from "../../images/courseImage.png";
import courseZnak from "../../images/courseZnak.jpg";
import courseFigur from "../../images/figur1.jpg";
import star from "../../images/star.svg";
import CourseTheory from "./CourseTheory/CourseTheory";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import api from "../../utils/Api";

const Course = () => {
  const courseInfo = useLocation().state;
  const data = courseInfo.modules.sort((a, b) => a.id - b.id);
  const navigate = useNavigate();
  const { token, isAuth } = useAuth();
  const goToRegister = () => {
    navigate("/register");
  };
  const goToTaskPage = () => {
    if (!isAuth) {
      return goToRegister();
    } else {
      return api.isJoined(courseInfo.id, token).then((res) => {
        res
          ? navigate("/theory", { state: courseInfo })
          : api
              .joinCourse(courseInfo.id, token)
              .then(() => navigate("/theory", { state: courseInfo }));
      });
    }
  };
  return (
    <div className={Style["content"]}>
      <div className={Style["card"]}>
        <div className={Style["card__container"]}>
          <h2 className={Style["card__title"]}>{courseInfo.title}</h2>
          <p className={Style["card__text"]}>{courseInfo.fullDescription}</p>
          <div className={Style["card__info"]}>
            <div className={Style["card__item"]}>
              <img src={star} alt="звезда" className={Style["card__star"]} />
              <div className={Style["card__duration"]}>
                <div className={Style["card__duration-info"]}>
                  <h2 className={Style["card__duration-title"]}>
                    Длительность
                  </h2>
                  <p className={Style["card__duration-text"]}>
                    {courseInfo.duration} месяцев
                  </p>
                </div>
              </div>
            </div>
            <div className={Style["card__item"]}>
              <img src={star} alt="звезда" className={Style["card__star"]} />
              <div className={Style["card__duration"]}>
                <div className={Style["card__duration-info"]}>
                  <h2 className={Style["card__duration-title"]}>
                    Доступ к курсу
                  </h2>
                  <p className={Style["card__duration-text"]}>навсегда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={courseImage} alt="Курсы" className={Style["card__img"]} />
      </div>
      <section className={Style["course"]}>
        <div className={Style["course__info"]}>
          <h2 className={Style["course__title"]}>Кому подойдёт этот курс</h2>
          <div className={Style["course__container"]}>
            <div className={Style["course__item"]}>
              <img
                src={courseZnak}
                alt="Знак скобочек для курсов"
                className={Style["course__img"]}
              />
              <div className={Style["course__content"]}>
                <h2 className={Style["course__content-title"]}>
                  {courseInfo.forWhomTitle1}
                </h2>
                <p className={Style["course__content-text"]}>
                  {courseInfo.forWhomDesc1}
                </p>
              </div>
            </div>
            <div className={Style["course__item"]}>
              <img
                src={courseFigur}
                alt="Знак скобочек для курсов"
                className={Style["course__img"]}
              />
              <div className={Style["course__content"]}>
                <h2 className={Style["course__content-title"]}>
                  {courseInfo.forWhomTitle2}
                </h2>
                <p className={Style["course__content-text"]}>
                  {courseInfo.forWhomDesc2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={Style["theory"]}>
        <h2 className={Style["theory__title"]}>Содержание курса</h2>
        <div className={Style["theory__container"]}>
          <div className={Style["theory__info"]}>
            <div className={Style["theory__content"]}>
              <p className={Style["theory__module"]}>
                <span className={Style["theory__number-blue"]}>
                  {courseInfo.modules.length}
                </span>{" "}
                {courseInfo.modules.length > 4 ? "Модулей" : "Модуля"}
              </p>
            </div>
            <button
              className={`button ${Style["theory__button"]}`}
              onClick={goToTaskPage}
            >
              Записаться на курс
            </button>
          </div>
          <div className={Style["theory__all-course"]}>
            <div className={Style["theory__course"]}>
              {data.map((item) => (
                <CourseTheory
                  key={item.id}
                  title={item.levelName}
                  header={item.courseModuleHeaders}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
