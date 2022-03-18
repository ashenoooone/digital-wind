import React from 'react';
import cardImgFirst from '../../../images/card2.jpg';
import Card from '../Card/Card';
import './Slider.css';

const Slider = () => {
  return (
    <section className='slider'>
      <div className='slider__info'>
        <h1 className='slider__title'>
          Justudy — ваш прямой путь в IT-профессии
        </h1>
        <p className='slider__subtitle'>
          Выберите интересующий курс и начинайте осваивать новую профессию!
        </p>
      </div>
      <div className='slider__cards'>
        <div className='slider__row'>
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
