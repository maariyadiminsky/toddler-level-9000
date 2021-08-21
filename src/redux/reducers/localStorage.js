import {
    GET_LOCAL_STORAGE_DATA,
    GET_WORD_DATA,
    GET_WORD_INITIAL_DATA
} from "../actions/types";

const INITIAL_STATE = {
    date: "", // date last saved
    parentCode: "0000", // code to access parent dashboard. Can be letters and numbers.
    starsEarned: 0, // earn stars when completing tasks / understanding words
    colors: {},
    numbers: {},
    food: {},
    social: {}
} 

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_LOCAL_STORAGE_DATA:
            return { ...state, ...payload };
        case GET_WORD_INITIAL_DATA:
            return { ...state, childMastered: false }
        case GET_WORD_DATA:
            console.log(payload.word, state.colors);
            return {
                ...state,
                colors: {
                    ...state.colors,
                    [payload.word]: {
                        images: payload.imageData,
                        audio: payload.audioData
                    }
                }
            }
        default:
            return state;
    }
};