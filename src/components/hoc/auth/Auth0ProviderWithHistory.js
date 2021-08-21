import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  console.log("Auth0ProviderWithHistory", domain, clientId);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}    
      audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
      scope="read:current_user"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;