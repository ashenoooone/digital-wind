import React from 'react';
import './Courses.css';
import Card from '.././Main/Card/Card';
import cardImgFirst from '../../images/card2.jpg';
import api from '../../utils/Api';
const Courses = () => {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    api.getCourses().then((res) => {
      setCourses([...courses, ...res]);
    });
  }, []);

  return (
    <section className='courses'>
      <h1 className='courses__title'>
        Выберите интересующий курс и начинайте осваивать новую профессию!
      </h1>
      <div className='courses__table'>
        {courses.map((item) => {
          return (
            <Card
              key={item.id}
              description={item.description}
              time={item.duration}
              img={cardImgFirst}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
