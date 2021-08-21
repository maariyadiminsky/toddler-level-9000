import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
      <Auth0Provider
        domain= {process.env.REACT_APP_AUTH0_DOMAIN}
        clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
