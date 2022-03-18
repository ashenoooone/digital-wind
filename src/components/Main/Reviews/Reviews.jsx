import React from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import avatar_1 from '../../../images/review-avatar.svg';
import avatar_2 from '../../../images/review-avatar-1.svg';
import './Reviews.css';
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <div className='reviews__row'>
        <ReviewsCard
          author='Роман Черемухин'
          avatar={avatar_1}
          course='Аналитик Big Data'
          text='Как работать с таблицей, которая весит несколько десятков гигабайт?
            Это один из многих практических вопросов, на которые отвечает курс.
            Причем я хотел курс, который систематизирует разрозненные знания, и
            их сразу применять на практике. Ожидания полностью оправдались: не
            было ни одного урока, который бы нельзя было использовать в решении
            повседневных задач, связанных с анализом Big Data и работой с
            выгрузками из соцсетей и Яндекс.Метрики. Все доступно, доходчиво, на
            примерах, с контролем полученных знаний на каждом этапе и живым
            общением с коллегами и наставником в Slack.'
          title='Не было ни одного урока, который нельзя использовать для решения
            повседневных задач'
        />
        <ReviewsCard
          author='Александр Поляков'
          avatar={avatar_2}
          course='Основы Python'
          text='На курс я попал со школьными знаниями Турбо Паскаля и с энтузиазмом изучить основы Python. Успешно применяю в работе. Курс классный, в нем очень много интересного. В качестве введения в язык программирования — идеален.'
          title='По итогам курса полученные знания я сразу смог применять в работе'
        />
      </div>
      <Link to='error' className='review__link'>
        Все отзывы
      </Link>
    </section>
  );
};

export default Reviews;
