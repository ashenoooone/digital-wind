import React from 'react';
import navIcon from '../images/navIcon.svg';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
    <div className='header__container'>
      <img src={logo} alt='логотип' className='header__img' />
      <div className='header__nav'>
        <a href='#' className='header__link'>
          О компании
        </a>
        <a href='#' className='header__link'>
          Курсы
        </a>
        <a href='#' className='header__link'>
          Отзывы
        </a>
        <a href='#' className='header__link'>
          Контакты
        </a>
      </div>
      <div className='header__buttons'>
        <img className='header__button' src={navIcon}></img>
        <button className='header__button'>Войти</button>
      </div>
    </div>
    </header>
  );
};

export default Header;
