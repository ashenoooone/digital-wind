import React from 'react';
import line from '../../../images/line.svg';
import smallLine from '../../../images/line320px.svg';
import './Instruction.css';

const Instruction = () => {
  return (
    <section className='instruction'>
      <h2 className='instruction__title'>Как устроена платформа</h2>
      <div className='instruction__container'>
        <div className='instruction__lists'>
          <div className='instruction__item'>
            <h2 className='instruction__item-title'>
              Круглосуточный доступ к личному кабинету
            </h2>
            <p className='instruction__item-description'>
              Смотрите видео онлайн в удобное время
            </p>
          </div>
          <div className='instruction__item'>
            <h2 className='instruction__item-title'>
              Курсы обновляются регулярно
            </h2>
            <p className='instruction__item-description'>
              Получаете знания, которые отвечают требованиям рынка труда
            </p>
          </div>
          <div className='instruction__item'>
            <h2 className='instruction__item-title'>
              Проверочные тесты и практические задания
            </h2>
            <p className='instruction__item-description'>
              Закрепляете теорию на практике и получаете обратную связь
            </p>
          </div>
        </div>
        {window.screen.width > 768 ? (
          <img src={line} alt='Линия' className='instruction__line' />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Instruction;
