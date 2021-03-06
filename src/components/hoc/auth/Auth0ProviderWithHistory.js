import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

import { 
  DEFAULT,
  AUTH0_AUDIENCE, 
  AUTH0_SCOPE,
  AUTH0_REDIRECT_URI_AFTER_LOGIN
} from '../../../const';

const Auth0ProviderWithHistory = ({ children = DEFAULT.FUNCTION }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const history = useHistory();

    const onRedirectCallback = (appState = DEFAULT.UNDEFINED) => {
    history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={AUTH0_REDIRECT_URI_AFTER_LOGIN}
            onRedirectCallback={onRedirectCallback}    
            audience={AUTH0_AUDIENCE}
            scope={AUTH0_SCOPE}
        >
            {children}
        </Auth0Provider>
    );
};

Auth0ProviderWithHistory.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.func,
      PropTypes.string,
    ]).isRequired
};

export default Auth0ProviderWithHistory;