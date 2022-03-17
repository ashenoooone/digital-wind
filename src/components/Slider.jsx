import React from "react";
import cardImgFirst from "../images/card2.jpg";
const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__info">
        <h1 className="slider__title">
          Justudy — ваш прямой путь в IT-профессии
        </h1>
        <p className="slider__subtitle">
          Выберите интересующий курс и начинайте осваивать новую профессию!
        </p>
      </div>
      <div className="slider__cards">
        <div className="slider__row">
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
          <div className="slider__card">
            <div className="slider__card-container">
              <h2 className="slider__card-title">Data Scientist</h2>
              <p className="slider__card-description">
                Станьте самым востребованным специалистом современности
              </p>
              <p className="slider__card-time">Длительность: 24 месяца</p>
              <button className="slider__about-button">
                Подробнее о курсе
              </button>
            </div>
            <img
              src={cardImgFirst}
              alt="Data Scientist"
              className="slider__card-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
