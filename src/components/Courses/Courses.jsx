import React from 'react';
import './Courses.css';
import Card from '.././Main/Card/Card';
import cardImgFirst from '../../images/card2.jpg';
const Courses = () => {
  return (
    <section className='courses'>
      <h1 className='courses__title'>
        Выберите интересующий курс и начинайте осваивать новую профессию!
      </h1>
      <div className='courses__table'>
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
    </section>
  );
};

export default Courses;
