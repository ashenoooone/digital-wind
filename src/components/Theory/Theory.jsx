import React from "react";
import Style from "./Theory.module.css";
import TheoryItem from "./TheoryItem/TheoryItem";

const Theory = () => {
  const theory = [
    {
      title: "Веб-вёрстка",
      level: "Базовый уровень",
      content: [
        "Введение",
        "Базовый CSS. Часть 1",
        "Базовый CSS. Часть 2",
        "Подготовка к вертске",
        "Layout. HTML-разметка",
        "Layout. Flexbox",
        "Layout. Стилизация",
        "Продвинутый HTML. Формы",
        "Продвинутый CSS. Часть 1",
        "Продвинутый CSS. Часть 2",
        "Адаптивность. Десктоп",
        "Адаптивность. Мобильные устройства",
        "JavaScript для верстальщика",
        "Доступность",
        "Кросс-браузерность",
        "База знаний",
        "Сетки",
        "Работа с хостингом",
        "Анимация",
      ],
      module: "19",
    },
    {
      title: "JavaScript",
      level: "Базовый уровень",
      content: ["Введение", "Базовый JavaScript"],
      module: "11",
    },
    {
      title: "Веб-вёрстка",
      level: "Продвинутый уровень",
      content: ["SCSS", "HTML5"],
      module: "9",
    },
    {
      title: "JavaScript",
      level: "Продвинутый уровень",
      content: ["React", "Redux"],
      module: "10",
    },
    {
      title: "Онлайн-сессии по веб-разработке",
      level: "Продвинутый уровень",
      content: ["Задание", "Ревью"],
      module: "6",
    },
    {
      title: "Проекты по верстке",
      level: "Итоговые проекты",
      content: ["Задание", "Ревью"],
      module: "2",
    },
    {
      title: "JavaScript",
      level: "Итоговые проекты",
      content: ["Задание", "Ревью"],
      module: "2",
    },
  ];
  return (
    <div className={Style["content"]}>
      <h1 className={Style["course__title"]}>Курс - Frontend-разработчик</h1>
      <div className={Style["course__items"]}>
        {theory.map((item) => {
          return (
            <TheoryItem
              level={item.level}
              title={item.title}
              module={item.module}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Theory;
