import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='digital-wind' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
