import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import errorImage from '../../images/Error-404.svg';
import './NotFoundPage.css';
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className='error'>
      <img src={errorImage} alt='ошибка 404' className='error-image' />
      <h1 className='error-title'>
        Страница не найдена или находится в разработке
      </h1>
      <button onClick={() => navigate(-1)} className='error__return-button'>
        Вернуться назад
      </button>
    </section>
  );
};

export default NotFoundPage;
