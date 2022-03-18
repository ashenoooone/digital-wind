import React from "react";
import star from "../../../images/star.svg";
import "./ProjectInfo.css";

function ProjectInfo() {
  return (
    <section className="project-info">
      <h1 className="project-info__title">Мы предлагаем</h1>
      <div className="project-info__lists">
        <div className="project-info__content">
          <img src={star} alt="Звезда" className="project-info__img" />
          <div className="project-info__text">
            <h2 className="project-info__content-title">Актуальные знания</h2>
            <p className="project-info__content-description">
              Работаем с лидерами отрасли, практикующими бизнес-экспертами,
              предпринимателями и менторами, для создания актуальной
              образовательной программы
            </p>
          </div>
        </div>
        <div className="project-info__content">
          <img src={star} alt="Звезда" className="project-info__img" />
          <div className="project-info__text">
            <h2 className="project-info__content-title">
              Практическую отработку навыков
            </h2>
            <p className="project-info__content-description">
              Мы проводим воркшопы, приглашаем экспертов отрасли на дипломные
              работы, даём фидбек по заданиям.
            </p>
          </div>
        </div>
        <div className="project-info__content">
          <img src={star} alt="Звезда" className="project-info__img" />
          <div className="project-info__text">
            <h2 className="project-info__content-title">
              Удобные форматы обучения
            </h2>
            <p className="project-info__content-description">
              Все наши курсы проходят дистанционно и при этом включают
              интерактивные занятия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
