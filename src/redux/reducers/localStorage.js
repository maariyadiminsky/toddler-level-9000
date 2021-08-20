import {
    GET_LOCAL_STORAGE_REDUX_STATE,
} from "../actions/types";

const INITIAL_STATE = {
    date: "", // date last saved
    parentCode: "0000", // code to access parent dashboard. Can be letters and numbers.
    starsEarned: 0, // earn stars when completing tasks / understanding words
    words: {} // all image and word request data will be saved here to reduce requests
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_LOCAL_STORAGE_REDUX_STATE:
            return { ...state, ...payload };
        default:
            return state;
    }
};