import React from 'react';
import navIcon from '../images/navIcon.svg';
import logo from '../images/logo.svg';

const Header = () => {
  const [headerVisibility, setHeaderVisibility] = React.useState(true);
  const [pos, setPos] = React.useState(113);
  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 113 && window.scrollY > pos) {
        setHeaderVisibility(false);
        setPos(window.scrollY);
      } else {
        setHeaderVisibility(true);
        setPos(window.scrollY);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [pos]);

  return (
    <header className={headerVisibility ? `header` : `header header_hide`}>
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
