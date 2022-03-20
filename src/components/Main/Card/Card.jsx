import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={Style['slider__card']}>
      <div className={Style['slider__card-container']}>
        <h2 className={Style['slider__card-title']}>{props.title}</h2>
        <p className={Style['slider__card-description']}>{props.description}</p>
        <p className={Style['slider__card-time']}>
          Длительность: {props.time} мес.
        </p>
        <Link to='error' className={Style['slider__about_button']}>
          Подробнее о курсе
        </Link>
      </div>
      <img
        src={props.img}
        alt={props.title}
        className={Style['slider__card-img']}
      />
    </div>
  );
};

export default Card;
