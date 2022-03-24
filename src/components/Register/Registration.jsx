import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../images/Resume.svg';
import './Registration.css';
import { useForm } from 'react-hook-form';
import api from '../../utils/Api';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Registration = () => {
  const onSubmit = (data) => {
    api
      .register({ ...data, name: '', surname: '', ip: '' })
      .then((res) => {
        reset();
      })
      .catch((er) => {
        reset();
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
    <section className='registration'>
      <div className='registration__container'>
        <h1 className='registration__title'>Регистрация</h1>
        <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
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
              required: 'Это поле обязательно к заполнению',
              validate: {
                phone: (value) => {
                  return (
                    isValidPhoneNumber(value) || 'Вводите телефон через +7'
                  );
                },
              },
            })}
          />
          <span className='error-message'>{errors?.password?.message}</span>
          <input
            className='registration__input'
            placeholder='Пароль'
            {...register('password', {
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
