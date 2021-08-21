import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react"; 

import { setUserId } from "../redux/actions/auth"

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.sub) {
      dispatch(setUserId(user.sub));
    }
  }, [user, dispatch])

  const handleButtonClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  }

  const renderButtonText = () => (
    isAuthenticated ? "Log out" : "Log in"
  );

  return (
    <button 
      className="font-poppins"
      onClick={handleButtonClick}>
        {renderButtonText()}
    </button>
  );
};

export default AuthButton;