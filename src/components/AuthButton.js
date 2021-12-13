import React from 'react';
import { useAuth } from '../hooks/auth';

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } 
    // temporary: todo move logout button into parent dashboard
    else {
      logout();
    }
  }

  return (
    <button 
      className="font-poppins font-bold tracking-wide text-2xl text-blue-300"
      onClick={handleButtonClick}>
        Parents
    </button>
  );
};

export default AuthButton;