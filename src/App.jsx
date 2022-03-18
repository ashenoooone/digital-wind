import Footer from './components/Footer';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import React from 'react';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
