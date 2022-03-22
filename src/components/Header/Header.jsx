import React from 'react';
import navIcon from '../../images/navIcon.svg';
import logo from '../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import burger from '../../images/burder-header.svg';
import Menu from '../Menu/Menu';

const Header = () => {
  const [headerVisibility, setHeaderVisibility] = React.useState(true);
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [pos, setPos] = React.useState(113);
  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 113 && window.scrollY > pos) {
        setHeaderVisibility(false);
        setIsMenuActive(false);
        setBurgerActive(false);
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
      <div>
        <Link to='digital-wind'>
          <img src={logo} alt='логотип' className='header__img' />
        </Link>
      </div>
      <div className='header__nav'>
        <Link to='info' className='header__link'>
          О компании
        </Link>
        <Link to='courses' className='header__link'>
          Курсы
        </Link>
      </div>
      <div className='header__buttons header__buttons-desktop'>
        {/* <img className='header__button' alt='кнопка' src={navIcon} /> */}
        <Link to='/login' className='header__button'>
          Войти
        </Link>
      </div>
      <div className='header__buttons header__buttons-mobile'>
        {/* <img
          className='header__button'
          alt='кнопка'
          src={navIcon}
          style={{ display: 'none' }}
        /> */}
        <img
          src={burger}
          alt='бургер'
          className={
            burgerActive
              ? 'header__burger header__burger_active'
              : 'header__burger'
          }
          onClick={() => {
            setBurgerActive(!burgerActive);
            setIsMenuActive(!isMenuActive);
          }}
        />
        <Menu isActive={isMenuActive} />
      </div>
    </header>
  );
};

export default Header;
