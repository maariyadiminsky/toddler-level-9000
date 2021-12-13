import  { combineReducers } from 'redux';

import auth from './auth';
import localStorage from './localStorage';

export default combineReducers({
    auth,
    localStorage,
});