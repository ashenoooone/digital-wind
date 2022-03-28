import React from "react";
import cardImgFirst from "../../../images/card2.jpg";
import Card from "../Card/Card";
import "./Slider.css";
import api from "../../../utils/Api";

const Slider = () => {
  const [allCards, setAllCards] = React.useState([]);
  React.useEffect(() => {
    api.getCourses().then((res) => {
      setAllCards(res);
    });
  }, []);
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
          {allCards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                time={card.duration}
                img={card.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
