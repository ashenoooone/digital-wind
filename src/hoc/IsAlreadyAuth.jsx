import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const IsAlreadyAuth = ({ children }) => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <Navigate to='/profile' />;
  }
  return children;
};

export default IsAlreadyAuth;
