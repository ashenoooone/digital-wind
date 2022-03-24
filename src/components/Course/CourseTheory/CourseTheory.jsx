import React from "react";
import Style from "../Course.module.css";
import courseButtonUp from "../../../images/courseButtonUp.svg";

const CourseTheory = (props) => {
  const api = [
    {
      title: "Веб-вёрстка. Базовый уровень",
      content: [
        "Введение",
        "Базовый HTML.",
        "Базовый CSS. Часть 1.",
        "Базовый CSS. Часть 2.",
        "Подготовка к вёрстке.",
        "Layout. HTML-разметка.",
        "Layout. Flexbox.",
        "Layout. Стилизация.",
        "Продвинутый HTML. Формы.",
        "Продвинутый CSS. Часть 1.",
        "Продвинутый CSS. Часть 2.",
        "Адаптивность. Десктоп.",
        "Адаптивность. Мобильные устройства.",
        "JavaScript для верстальщика.",
        "Доступность.",
        "Кросс-браузерность.",
        "База знаний.",
        "Сетки.",
        "Работа с хостингом.",
        "Анимация.",
      ],
    },
    {
      title: "JavaScript. Базовый уровень",
      content: [
        "Введение.",
        "Переменные и работа с числами.",
        "Строки, boolean и условные операторы.",
        "Массивы и циклы.",
        "Функции.",
        "Объекты.",
        "Введение в DOM.",
        "Введение в DOM. Часть 2.",
        "Константы, области видимости и замыкания.",
        "Преобразование типов и нестрогие сравнения.",
        "Общение с сервером, async/await.",
      ],
    },
  ];
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
        {api.map((item) => {
          console.log(item);
          return (
            <>
              <h2 className={Style["theory__list-title"]}>{item.title}</h2>
              <ul>
                {item.content.map((el) => {
                  return <li className={Style["theory__list-text"]}>{el}</li>;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTheory;
