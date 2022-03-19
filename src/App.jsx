import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import AboutCreators from './components/AboutCreators/AboutCreators';
import Registration from './components/Register/Registration';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='digital-wind' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/info' element={<AboutCreators />} />
        <Route path='register' element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;
