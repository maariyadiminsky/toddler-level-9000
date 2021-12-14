import { SET_USER_ID } from '../actions/types';

import { DEFAULT } from '../../const';

const INITIAL_STATE = {
    userId: ''
};

export default (state = INITIAL_STATE, { type = DEFAULT.STRING, payload = DEFAULT.NULL }) => {
    switch(type) {
        case SET_USER_ID:
            return { ...state, userId: payload }
        default: 
            return state;
    }
};