import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

import { DEFAULT } from '../../const'

import '@testing-library/jest-dom';

export const Providers = ({ children = DEFAULT.FUNCTION }) => (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
);

const customRender = (ui = DEFAULT.NULL, options = DEFAULT.NULL) => {
  if (options && options.route) {
    window.history.pushState({}, '', options.route);
  }
  
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }