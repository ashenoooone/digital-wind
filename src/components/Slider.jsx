import React from "react";
import cardImgFirst from "../images/card2.jpg";
import Card from "./Card";
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
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
      <Card
        title="Data Scientist"
        description="Станьте самым востребованным специалистом современности"
        time="Длительность: 24 месяца"
        img={cardImgFirst}
      />
    </section>
  );
};

export default Slider;
