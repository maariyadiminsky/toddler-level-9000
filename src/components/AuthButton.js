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
    if (!isAuthenticated) {
      loginWithRedirect();
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