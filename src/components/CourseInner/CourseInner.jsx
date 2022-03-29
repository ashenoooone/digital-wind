import React from 'react';
import './CourseInner.css';
import { useLocation } from 'react-router-dom';
import white_burger from '../../images/white-burger.svg';
import stroke_white from '../../images/stroke-white.svg';

const CourseInner = () => {
  const courseInformation = useLocation().state;
  const [nav, setNav] = React.useState(false);
  return (
    <section className='course-inner'>
      <nav className={`nav ${nav && 'nav-active'}`}>
        <div className='nav__container'>
          <img
            src={nav ? stroke_white : white_burger}
            alt=''
            className='nav__img'
            onClick={() => setNav(!nav)}
          />
          <div className={`nav__bar ${!nav && 'nav__bar-inactive'}`}>
            <h2 className='nav__title'>Лалилох</h2>
            <ul className='nav__list'>
              <li className='nav__item'>лляля</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='course-inner__container'>
        <p className='course-inner__name'>{courseInformation.level}</p>
        <h1 className='course-inner__title'>{courseInformation.title}</h1>
        <p className='course-inner__par'>{courseInformation.description}</p>
      </div>
    </section>
  );
};

export default CourseInner;
