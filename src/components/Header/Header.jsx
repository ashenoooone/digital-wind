import React from 'react';
import navIcon from '../../images/navIcon.svg';
import logo from '../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

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
        <Link to='digital-wind'>
          <img src={logo} alt='логотип' className='header__img' />
        </Link>
        <div className='header__nav'>
          <Link to='info' className='header__link'>
            О компании
          </Link>
          <Link to='courses' className='header__link'>
            Курсы
          </Link>
          <Link to='profile' className='header__link'>
            Отзывы
          </Link>
          <Link to='error' className='header__link'>
            Контакты
          </Link>
        </div>
        <div className='header__buttons'>
          <img className='header__button' src={navIcon} />
          <Link to='/register' className='header__button'>
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
