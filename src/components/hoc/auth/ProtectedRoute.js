import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

import { DEFAULT } from '../../../const';

import Loader from '../../Loader/Loader';

const ProtectedRoute = ({ component = DEFAULT.FUNCTION, ...args }) => (
    <Route
        component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loader />
        })}
        {...args}
    />
);

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
  ]).isRequired,
};

export default ProtectedRoute;