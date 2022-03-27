import React from 'react';
import './CourseInner.css';

const CourseInner = (props) => {
  return (
    <section className='course-inner'>
      <p className='course-inner__name'>{props.name}</p>
      <h1 className='course-inner__title'>{props.title}</h1>
      <p className='course-inner__par'>
        Значимость этих проблем настолько очевидна, что постоянный
        количественный рост и сфера нашей активности влечет за собой процесс
        внедрения и модернизации новых предложений. Задача организации, в
        особенности же постоянный количественный рост и сфера нашей активности
        позволяет выполнять важные задания по разработке дальнейших направлений
        развития. Значимость этих проблем настолько очевидна, что рамки и место
        обучения кадров способствует подготовки и реализации систем массового
        участия. Значимость этих проблем настолько очевидна, что начало
        повседневной работы по формированию позиции влечет за собой процесс
        внедрения и модернизации системы обучения кадров, соответствует насущным
        потребностям. Таким образом постоянное информационно-пропагандистское
        обеспечение нашей деятельности представляет собой интересный эксперимент
        проверки направлений прогрессивного развития. Задача организации, в
        особенности же рамки и место обучения кадров представляет собой
        интересный эксперимент проверки направлений прогрессивного развития.
        Разнообразный и богатый опыт рамки и место обучения кадров способствует
        подготовки и реализации систем массового участия. Товарищи! реализация
        намеченных плановых заданий требуют определения и уточнения модели
        развития.
      </p>
    </section>
  );
};

export default CourseInner;