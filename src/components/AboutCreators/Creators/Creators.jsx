import React from "react";
import ildarAvatar from "../../../images/Ildar.png";
import romanAvatar from "../../../images/Roman.png";
import igorAvatar from "../../../images/Igor.png";

const Creators = () => {
  return (
    <section className="creators">
      <h2 className="creators__title project-info__title">
        Основатели платформы
      </h2>
      <div className="creators__content">
        <div className="creators__item">
          <img
            src={ildarAvatar}
            alt="Аватарка Ильдара Рамазанова"
            className="creators__avatar"
          />
          <h2 className="creators__name">Ильдар Рамазанов</h2>
          <p className="creators__job">Бэкенд разработчик</p>
        </div>
        <div className="creators__item">
          <img
            src={romanAvatar}
            alt="Аватарка Романа Гонтаря"
            className="creators__avatar"
          />
          <h2 className="creators__name">Роман Гонтарь</h2>
          <p className="creators__job">Фронтенд разработчик</p>
        </div>
        <div className="creators__item">
          <img
            src={igorAvatar}
            alt="Аватарка Игоря Конешова"
            className="creators__avatar"
          />
          <h2 className="creators__name">Игорь Конешов</h2>
          <p className="creators__job">Фронтенд разработчик</p>
        </div>
      </div>
    </section>
  );
};

export default Creators;
