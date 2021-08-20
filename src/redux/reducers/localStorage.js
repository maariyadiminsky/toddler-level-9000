import {
    GET_LOCAL_STORAGE_REDUX_STATE,
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_LOCAL_STORAGE_REDUX_STATE:
            return { ...state, ...payload };
        default:
            return state;
    }
};