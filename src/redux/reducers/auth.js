import { SET_USER_ID } from "../actions/types";

const INITIAL_STATE = {
    userId: ""
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case SET_USER_ID:
            return { ...state, userId: payload }
        default: 
            return state;
    }
};