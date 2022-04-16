import React from 'react';
import '../CourseInner.css';
import 'react-router-dom';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
  const data = props.content.sort((a, b) => a.id - b.id);
  return (
    <>
      <h2 className='nav__title'>{props.title}</h2>
      <ul className='nav__list'>
        {data &&
          data.map((item) => {
            return (
              <Link
                style={{ color: '#b6b6b6', textDecoration: 'none' }}
                key={item.id}
                to={`/description/${props.courseId}/${item.id}`}
              >
                <li className='nav__item'>{item?.title}</li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default NavigationItem;
