import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import AboutCreators from './components/AboutCreators/AboutCreators';
import Registration from './components/Register/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Profile from './components/Profile/Profile';
import Course from './components/Course/Course';
import RequierAuth from './hoc/RequierAuth';
import CourseInner from './components/CourseInner/CourseInner';
import IsAlreadyAuth from './hoc/IsAlreadyAuth';
import Theory from './components/Theory/Theory';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='digital-wind' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='info' element={<AboutCreators />} />
        <Route
          path='register'
          element={
            <IsAlreadyAuth>
              <Registration />
            </IsAlreadyAuth>
          }
        />
        <Route
          path='/login'
          element={
            <IsAlreadyAuth>
              <Login />
            </IsAlreadyAuth>
          }
        />
        <Route path='courses' element={<Courses />} />
        <Route
          path='course-inner'
          element={
            <CourseInner name='Веб-вёрстка. Базовый уровень' title='Введение' />
          }
        />
        <Route
          path='profile'
          element={
            <RequierAuth>
              <Profile />
            </RequierAuth>
          }
        />
        <Route path='course' element={<Course />} />
        <Route path='theory' element={<Theory />} />
      </Route>
    </Routes>
  );
}

export default App;
