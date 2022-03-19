import React from 'react';
import resume from '../../images/Resume.svg';
import './Registration.css';

const Registration = () => {
  return (
    <section className='registration'>
      <div className='registration__container'>
        <h1 className='registration__title'>Регистрация</h1>
        <form className='registration__form' novalidate>
          <input
            className='registration__input'
            type='email'
            placeholder='Почта'
          />
          <input
            className='registration__input'
            type='tel'
            placeholder='Телефон'
          />
          <input
            className='registration__input'
            type='password'
            placeholder='Пароль'
          />
          <div className='registration__buttons'>
            <button type='submit' className='registration__submit-button'>
              Зарегистрироваться
            </button>
            <button type='button' className='registration__button'>
              Войти
            </button>
          </div>
        </form>
      </div>
      <img src={resume} alt='резюме' className='registration__image' />
    </section>
  );
};

export default Registration;
