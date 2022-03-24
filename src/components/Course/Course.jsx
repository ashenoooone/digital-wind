import React from "react";
import Style from "./Course.module.css";
import courseButtonUp from "../../images/courseButtonUp.svg";
import courseImage from "../../images/courseImage.png";
import courseZnak from "../../images/courseZnak.svg";
import star from "../../images/star.svg";
import CourseTheory from "./CourseTheory/CourseTheory";

const Course = () => {
  const [isAnimate, setAnimate] = React.useState(false);
  const allTheory = [
    { title: "1. Базовый уровень" },
    { title: "2. Продвинутый уровень" },
    { title: "3. Онлайн-сессии по веб-разработке" },
    { title: "4. Итоговые проекты" },
  ];
  return (
    <div className={Style["content"]}>
      <div className={Style["card"]}>
        <div className={Style["card__container"]}>
          <h2 className={Style["card__title"]}>Frontend-разработчик</h2>
          <p className={Style["card__text"]}>
            Вы изучите основы HTML, CSS и JavaScript, научитесь создавать сайты
            и приложения для любых устройств, оптимизировать код и работать с
            анимацией. Соберёте портфолио и сможете начать карьеру разработчика.
          </p>
          <div className={Style["card__info"]}>
            <div className={Style["card__item"]}>
              <img src={star} alt="звезда" className={Style["card__star"]} />
              <div className={Style["card__duration"]}>
                <div className={Style["card__duration-info"]}>
                  <h2 className={Style["card__duration-title"]}>
                    Длительность
                  </h2>
                  <p className={Style["card__duration-text"]}>6 месяцев</p>
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
                  Новичкам в разработке
                </h2>
                <p className={Style["course__content-text"]}>
                  Вы с нуля научитесь верстать сайты на HTML и CSS, создавать
                  приложения и веб-страницы на JavaScript. Отработаете
                  полученные знания на практике и соберёте портфолио.
                </p>
              </div>
            </div>
            <div className={Style["course__item"]}>
              <img
                src={courseZnak}
                alt="Знак скобочек для курсов"
                className={Style["course__img"]}
              />
              <div className={Style["course__content"]}>
                <h2 className={Style["course__content-title"]}>
                  Начинающим программистам
                </h2>
                <p className={Style["course__content-text"]}>
                  Вы расширите круг своих компетенций, изучив синтаксис
                  JavaScript, CSS на продвинутом уровне. Научитесь настраивать
                  командный доступ с Git и делать более чистые и качественные
                  сайты.
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
                <span className={Style["theory__number-blue"]}>49</span> модулей
              </p>
              <p className={Style["theory__video"]}>
                <span className={Style["theory__number-blue"]}>150</span>{" "}
                видеоматериалов
              </p>
            </div>
            <button className={Style["theory__button"]}>
              Начать проходить курс
            </button>
          </div>
          <div className={Style["theory__all-course"]}>
            <div className={Style["theory__course"]}>
              {allTheory.map((item) => (
                <CourseTheory title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
