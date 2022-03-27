import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../images/Resume.svg';
import './Registration.css';
import { useForm } from 'react-hook-form';
import api from '../../utils/Api';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Registration = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    api
      .register(data)
      .then((res) => {
        dispatch(
          setUser({
            email: res.email,
            name: res.name,
            surname: res.surname,
            token: res.token,
            id: res.id,
            phone: res.phone,
          })
        );
        reset();
      })
      .catch((er) => {
        console.error(er);
        reset();
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
    <section className='registration'>
      <div className='registration__container'>
        <h1 className='registration__title'>Регистрация</h1>
        <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
          <span className='error-message'>{errors?.name?.message}</span>
          <input
            type='text'
            className={`registration__input ${
              errors?.name && 'registration__input-error'
            }`}
            placeholder='Имя'
            {...register('name', {
              required: 'Это поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимальная длина имени 2 символа',
              },
              maxLength: {
                value: 32,
                message: 'Максимальная длина имени 32 символа',
              },
            })}
          />
          <span className='error-message'>{errors?.surname?.message}</span>
          <input
            type='text'
            className={`registration__input ${
              errors?.surname && 'registration__input-error'
            }`}
            placeholder='Фамилия'
            {...register('surname', {
              required: 'Это поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимальная длина фамилии 2 символа',
              },
              maxLength: {
                value: 32,
                message: 'Максимальная длина фамилии 32 символа',
              },
            })}
          />
          <span className='error-message'>{errors?.email?.message}</span>
          <input
            className={`registration__input && ${
              errors?.email && 'registration__input-error'
            }`}
            placeholder='Почта'
            autoComplete='none'
            {...register('email', {
              required: 'Это поле обязательно к заполнению',

              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Введите корректный адрес электронной почты',
              },
              minLength: {
                value: 7,
                message: 'Минимальная длина этого поля 7 символов',
              },
            })}
          />
          <span className='error-message'>{errors?.phone?.message}</span>
          <input
            className={`registration__input ${
              errors?.phone && 'registration__input-error'
            }`}
            placeholder='Телефон'
            type='tel'
            {...register('phone', {
              validate: {
                phone: (value) => {
                  return value
                    ? isValidPhoneNumber(value) || 'Вводите телефон через +7'
                    : true;
                },
              },
            })}
          />
          <span className='error-message'>{errors?.password?.message}</span>
          <input
            className={`registration__input ${
              errors?.password && 'registration__input-error'
            }`}
            placeholder='Пароль'
            type='password'
            {...register('password', {
              required: 'Это поле обязательно к заполнению',
              minLength: {
                value: 3,
                message: 'Минимальная длина пароля 3 символа',
              },
              maxLength: {
                value: 32,
                message: 'Максимальная длина пароля 32 символа',
              },
              validate: {
                numb: (value) =>
                  /\d/g.test(value) ||
                  'В строке должно быть хотя бы одно число',
                symb: (value) =>
                  /[a-zA-Z]/g.test(value) ||
                  'В строке должен быть хотя бы один символ',
                special: (value) =>
                  /[!@#$%^&*()=\-]/g.test(value) ||
                  'В строке должен быть хотя бы один специальный символ (!@#$%^&*()=-)',
              },
            })}
          />
          <div className='registration__buttons'>
            <input
              type='submit'
              disabled={!isValid}
              className={`registration__submit-button ${
                !isValid && 'registration__submit-button-inactive'
              }`}
              value='Зарегистрироваться'
            />
            <Link to='/login' className='registration__button'>
              Войти
            </Link>
          </div>
        </form>
      </div>
      <img src={resume} alt='резюме' className='registration__image' />
    </section>
  );
};

export default Registration;
