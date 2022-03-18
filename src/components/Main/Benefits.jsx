import React from "react";
import starImage from "../../images/star.svg";
import benefitsImage from "../../images/onlineClass.jpg";
import "./Benefits.css";
function Benefits(props) {
  return (
    <section className="benefits">
      <p className="benefits__heading">
        Актуальные знания от признанных экспертов рынка для новичков и
        практикующих специалистов.
      </p>
      <div className="benefits__content">
        <div className="benefits__container">
          <h2 className="benefits__title">Преимущества</h2>
          <ul className="benefits__list">
            <li className="benefits__list-item">
              <img
                src={starImage}
                alt="иконка"
                className="benefits__list-icon"
              />
              <p className="benefits__list-paragraph">
                Изучаете материал на платформе в любое удобное время
              </p>
            </li>
            <li className="benefits__list-item">
              <img
                src={starImage}
                alt="иконка"
                className="benefits__list-icon"
              />
              <p className="benefits__list-paragraph">
                Общаетесь с экспертами и единомышленниками в Telegram
              </p>
            </li>
            <li className="benefits__list-item">
              <img
                src={starImage}
                alt="иконка"
                className="benefits__list-icon"
              />
              <p className="benefits__list-paragraph">
                Выполняете практические задания, получаете обратную связь и
                закрепляете знания
              </p>
            </li>
          </ul>
          <a href="#" className="benefits__button">
            Все курсы
          </a>
        </div>
        <img
          src={benefitsImage}
          alt="онлайн класс"
          className="benefits__image"
        />
      </div>
    </section>
  );
}
export default Benefits;
