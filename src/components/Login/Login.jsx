import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import loginImage from '../../images/login.svg';
import { useForm } from 'react-hook-form';
import api from '../../utils/Api';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    api
      .login(data)
      .then((res) => {
        dispatch(
          setUser({
            email: res.email,
            name: res.name,
            surname: res.surname,
            token: res.token,
            id: res.id,
          })
        );
        navigate('/profile');
        reset();
      })
      .catch((er) => {
        console.error(er);
      });
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });
  return (
    <section className='login'>
      <div className='login__container'>
        <h1 className='login__title'>Войти</h1>
        <form
          className='login__form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            className='login__input'
            type='email'
            placeholder='Почта'
            {...register('email')}
          />
          <input
            className='login__input'
            type='password'
            placeholder='Пароль'
            {...register('password')}
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
