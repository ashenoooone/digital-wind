import React from 'react';
import vkLogo from '../../images/vk-logo.svg';
import instLogo from '../../images/inst-logo.svg';
import tgLogo from '../../images/tg-logo.svg';
import justudyLogo from '../../images/logo-footer.svg';
import './Footer.css';
import { Link } from 'react-router-dom';
import digitalWindLogo from '../../images/digitalWindLogo.png';

const Footer = () => {
  console.log(window.innerWidth);
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__contacts'>
          <Link to='digital-wind'>
            <img src={justudyLogo} alt='лого' className='footer__logo' />
          </Link>
          <p className='footer__email'>info@juststudy.online</p>
          <p className='footer__number'>+7 450 300 50 05</p>
        </div>
        <div className='footer__social-networks'>
          <a href='#' className='footer__social-network'>
            <img src={vkLogo} alt='логотип вк' className='footer__image' />
          </a>
          <a href='#' className='footer__social-network'>
            <img
              src={tgLogo}
              alt='логотип телеграма'
              className='footer__image'
            />
          </a>
        </div>
      </div>
      <div className='footer__container'>
        <nav className='footer__nav'>
          <Link to='info' className='footer__nav-item'>
            О компании
          </Link>
          <Link to='courses' className='footer__nav-item'>
            Курсы
          </Link>
        </nav>
        <a href='http://www.digitalwind.ru/' target='_blank'>
          <img
            src={digitalWindLogo}
            alt='Логотип цифрового ветра'
            className='footer__digital-logo'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
