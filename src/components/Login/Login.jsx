import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginImage from '../../images/login.svg';
import { useForm } from 'react-hook-form';
const Login = () => {
  const onSubmit = () => {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <section className='login'>
      <div className='login__container'>
        <h1 className='login__title'>Войти</h1>
        <form className='login__form' onSubmit={handleSubmit()}>
          <input className='login__input' type='email' placeholder='Почта' />
          <input
            className='login__input'
            type='password'
            placeholder='Пароль'
          />
          <div className='login__buttons'>
            <input
              type='submit'
              className='login__submit-button'
              value='Войти'
            />
            <Link to='/register' className='login__registration-button'>
              Регистрация
            </Link>
          </div>
        </form>
      </div>
      <img src={loginImage} alt='' className='login__image' />
    </section>
  );
};

export default Login;
