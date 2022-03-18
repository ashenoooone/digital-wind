import React from 'react';
import vkLogo from '../../images/vk-logo.svg';
import instLogo from '../../images/inst-logo.svg';
import tgLogo from '../../images/tg-logo.svg';
import justudyLogo from '../../images/logo-footer.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__contacts'>
          <img src={justudyLogo} alt='лого' className='footer__logo' />
          <a href='#' className='footer__link'>
            info@juststudy.online
          </a>
          <a href='#' className='footer__link'>
            +7 450 300 50 05
          </a>
        </div>
        <div className='footer__social-networks'>
          <a href='#' className='footer__social-network'>
            <img src={vkLogo} alt='логотип вк' />
          </a>
          <a href='#' className='footer__social-network'>
            <img src={instLogo} alt='логотип инстаграмма' />
          </a>
          <a href='#' className='footer__social-network'>
            <img src={tgLogo} alt='логотип телеграма' />
          </a>
        </div>
      </div>
      <div className='footer__container'>
        <nav className='footer__nav'>
          <a href='#' className='footer__nav-item'>
            О компании
          </a>
          <a href='#' className='footer__nav-item'>
            Курсы
          </a>
          <a href='#' className='footer__nav-item'>
            Отзывы
          </a>
          <a href='#' className='footer__nav-item'>
            Контакты
          </a>
        </nav>
        <p className='footer__author'>Сайт разработали CIFRO-VETER-TEAM</p>
      </div>
    </footer>
  );
};

export default Footer;
