import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../images/Error-404.svg';
import './NotFoundPage.css';
const NotFoundPage = () => {
  return (
    <section className='error'>
      <img src={errorImage} alt='ошибка 404' className='error-image' />
      <h1 className='error-title'>
        Страница не найдена или находится в разработке
      </h1>
      <Link to='/digital-wind' className='error__return-button'>
        Вернуться назад
      </Link>
    </section>
  );
};

export default NotFoundPage;
