import React from 'react';
import navIcon from '../../images/navIcon.svg';
import logo from '../../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import burger from '../../images/burder-header.svg';
import Menu from '../Menu/Menu';
import { useAuth } from '../../hooks/useAuth';
import avatar from '../../images/empty-avatar.svg';
import { useMenu } from '../../hooks/useMenu';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../store/slices/menuSlice';

const Header = () => {
  const [headerVisibility, setHeaderVisibility] = React.useState(true);
  const [burgerActive, setBurgerActive] = React.useState(false);
  // const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [pos, setPos] = React.useState(113);
  const dispatch = useDispatch();
  const { isAuth, name, surname } = useAuth();
  const { isMenuActive } = useMenu();
  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 113 && window.scrollY > pos) {
        setHeaderVisibility(false);
        // setIsMenuActive(false);
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
        {isAuth ? (
          <Link to='/profile' className='header__profile-container'>
            <img src={avatar} alt='' className='header__profile-image' />
            <p className='header__profile-name'>{`${name} ${surname[0]}.`}</p>
          </Link>
        ) : (
          <Link to='/login' className='header__button'>
            Войти
          </Link>
        )}
      </div>
      <div className='header__buttons header__buttons-mobile'>
        <img
          src={burger}
          alt='бургер'
          className='header__burger'
          onClick={() => {
            setBurgerActive(!burgerActive);
            dispatch(toggleMenu());
            // setIsMenuActive(!isMenuActive);
          }}
        />
        <Menu isActive={isMenuActive} />
      </div>
    </header>
  );
};

export default Header;
