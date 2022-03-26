import React from 'react';
import { Link } from 'react-router-dom';
import vkLogo from '../../images/vk-logo-black.svg';
import tgLogo from '../../images/tg-logo-black.svg';
import './Menu.css';
import avatar from '../../images/empty-avatar.svg';
import { useAuth } from '../../hooks/useAuth';
import closeImg from '../../images/close-button-menu.svg';
import { useMenu } from '../../hooks/useMenu';
import { useDispatch } from 'react-redux';
import { openMenu } from '../store/slices/menuSlice';
import { closeMenu } from '../store/slices/menuSlice';

const Menu = (props) => {
  const { isAuth, name, surname } = useAuth();
  const { isMenuActive } = useMenu();
  const dispatch = useDispatch();
  return (
    <div className={isMenuActive ? 'menu menu_active' : 'menu'}>
      <div className='menu__top'>
        {isAuth ? (
          <div className='menu__container'>
            <Link to='/profile' className='menu__profile-container'>
              <img src={avatar} alt='' className='menu__profile-image' />
              <p className='menu__profile-name'>{`${name} ${surname[0]}.`}</p>
            </Link>
            <img
              src={closeImg}
              alt='кнопка закрытия'
              className='menu__close-button'
              onClick={() => dispatch(closeMenu())}
            />
          </div>
        ) : (
          <div className='menu__container'>
            <Link to='/login' className='menu__enter-button'>
              Войти
            </Link>
            <img
              src={closeImg}
              alt='кнопка закрытия'
              className='menu__close-button'
            />
          </div>
        )}
        <Link to='/info' className='menu__link'>
          О компании
        </Link>
        <Link to='/courses' className='menu__link'>
          Курсы
        </Link>
      </div>
      <div className='menu__bottom'>
        <img src={vkLogo} alt='вк' className='menu__logo' />
        <img src={tgLogo} alt='тг' className='menu__logo' />
      </div>
    </div>
  );
};

export default Menu;
