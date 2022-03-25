import React from 'react';
import { Link } from 'react-router-dom';
import vkLogo from '../../images/vk-logo-black.svg';
import tgLogo from '../../images/tg-logo-black.svg';
import './Menu.css';
const Menu = (props) => {
  return (
    <div className={props.isActive ? 'menu menu_active' : 'menu'}>
      <div className='menu__top'>
        <Link to='/login' className='menu__enter-button'>
          Войти
        </Link>
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
