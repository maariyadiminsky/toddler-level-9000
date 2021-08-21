import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      console.log("calling loginWithRedirect");
      loginWithRedirect();
    }
  }

  const renderButtonText = () => isAuthenticated ? "Log out" : "Log in";

  return (
    <button onClick={handleButtonClick}>{renderButtonText()}</button>
  );
};

export default AuthButton;