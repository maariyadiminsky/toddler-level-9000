import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../../Loader/Loader';

import { DEFAULT } from '../../../const';

const ProtectedRoute = ({ component = DEFAULT.FUNCTION, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader />
    })}
    {...args}
  />
);

export default ProtectedRoute;