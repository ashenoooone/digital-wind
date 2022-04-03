import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';
const Layout = () => {
  return (
    <div className='content'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
