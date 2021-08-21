import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./components/hoc/auth/Auth0ProviderWithHistory";

import store from "./redux/store";

import './index.css';

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
