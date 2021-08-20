import { GET_CURRENT_USER_ID } from "../actions/types";

const INITIAL_STATE = {
    currentUserId: ""
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_CURRENT_USER_ID:
            return { ...state, currentUserId: payload }
        default: 
            return state;
    }
};