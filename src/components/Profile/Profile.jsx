import React from 'react';
import { Link } from 'react-router-dom';
import avatarImage from '../../images/empty-avatar.svg';
import settingsButton from '../../images/settings-button.svg';
import Button from '../Button/Button';
import Card from '../Main/Card/Card';
import './Profile.css';
import cardImgFirst from '../../images/card3.png';
import { useAuth } from '../../hooks/useAuth';
const Profile = () => {
  const { email, name, surname } = useAuth();
  return (
    <section className='profile'>
      <div className='profile__personal'>
        <img src={avatarImage} className='profile__avatar' alt='аватарка' />
        <div className='profile__info'>
          <h1 className='profile__name'>{`${name} ${surname}`}</h1>
          <p className='profile__email'>{email}</p>
          <Button title='Выйти из аккаунта' />
        </div>
        <Link to='digital-wind'>
          <img
            alt='настройки'
            src={settingsButton}
            className='profile__settings-button'
          />
        </Link>
      </div>
      <div className='profile__courses'>
        <div className='profile__courses-completed'>
          <h2 className='profile__courses-title'>Пройденный курс</h2>
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
        </div>
        <div className='profile__courses-current'>
          <h2 className='profile__courses-title'>Текущий курс</h2>
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
