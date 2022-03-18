import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';
import Reviews from './components/Reviews';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className='page'>
        <Benefits />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
