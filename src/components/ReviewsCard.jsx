import React from 'react';
import quotes from '../images/quotes.png';
const ReviewsCard = (props) => {
  return (
    <div className='reviews__card'>
      <img src={quotes} alt='кавычки' className='review__image' />
      <p className='review__card-title'>{props.title}</p>
      <p className='review__card-paragraph'>{props.text}</p>
      <div className='review__author'>
        <img
          src={props.avatar}
          alt={`${props.author} аватарка`}
          className='review__author-avatar'
        />
        <p className='review__author-name'>{props.author}</p>
      </div>
      <p className='review__status'>{`Прошел курс «${props.course}»`}</p>
    </div>
  );
};

export default ReviewsCard;
