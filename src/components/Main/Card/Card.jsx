import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div className='slider__card'>
      <div className='slider__card-container'>
        <h2 className='slider__card-title'>{props.title}</h2>
        <p className='slider__card-description'>{props.description}</p>
        <p className='slider__card-time'>{props.time}</p>
        <Link to='error' className='slider__about-button'>
          Подробнее о курсе
        </Link>
      </div>
      <img src={props.img} alt={props.title} className='slider__card-img' />
    </div>
  );
};

export default Card;
