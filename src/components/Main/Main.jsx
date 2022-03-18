import React from 'react';
import Benefits from './Benefits/Benefits';
import Reviews from './Reviews/Reviews';
import Slider from './Slider/Slider';

const Main = () => {
  return (
    <>
      <Slider />
      <div className='page'>
        <Benefits />
        <Reviews />
      </div>
    </>
  );
};

export default Main;
