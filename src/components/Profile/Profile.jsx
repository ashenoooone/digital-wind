import React from 'react';
import { Link } from 'react-router-dom';
import avatarImage from '../../images/empty-avatar.svg';
import settingsButton from '../../images/settings-button.svg';
import Button from '../Button/Button';
import Card from '../Main/Card/Card';
import './Profile.css';
import cardImgFirst from '../../images/card3.png';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/Api';

const Profile = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = React.useState([]);
  const dispatch = useDispatch();
  const { email, name, surname, token } = useAuth();
  const quit = () => {
    dispatch(removeUser());
    navigate('/login');
  };
  React.useEffect(() => {
    api.getUserCourses(token).then((res) => {
      setCourses([...courses, ...res.course]);
    });
  }, []);

  return (
    <section className='profile'>
      <div className='profile__personal'>
        <img src={avatarImage} className='profile__avatar' alt='аватарка' />
        <div className='profile__info'>
          <h1 className='profile__name'>{`${name} ${surname}`}</h1>
          <p className='profile__email'>{email}</p>
          <button onClick={() => quit()} type='button' className='button'>
            Выйти из аккаунта
          </button>
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
        {/* <div className='profile__courses-completed'>
          <h2 className='profile__courses-title'>Пройденный курс</h2>
          <Card
            title='Data Scientist'
            description='Станьте самым востребованным специалистом современности'
            time='Длительность: 24 месяца'
            img={cardImgFirst}
          />
        </div> */}
        <div className='profile__courses-current'>
          <h2 className='profile__courses-title'>Текущий курс</h2>
          {courses.map(({ title, description, duration, id }) => {
            return (
              <Card
                key={id}
                title={title}
                description={description}
                duration={duration}
                img={cardImgFirst}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;
