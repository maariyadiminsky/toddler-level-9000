import {
    GET_LOCAL_STORAGE_DATA,

    GET_MAIN_WORD_DATA,
    GET_SOCIAL_WORD_DATA,

    SET_STARS_EARNED
} from "../actions/types";

const INITIAL_STATE = {
    date: "", // date last saved
    parentCode: "0000", // code to access parent dashboard. Can be letters and numbers.
    starsEarned: 0, // earn stars when completing tasks / understanding words
    masteredWords: {
        colors: [],
        animals: [],
        numbers: [],
        food: [],
        social: []
    },
    colors: {},
    animals: {},
    numbers: {},
    food: {},
    social: {}
} 

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_LOCAL_STORAGE_DATA:
            return { ...state, ...payload };
        case GET_MAIN_WORD_DATA:
            return {
                ...state,
                [payload.wordType]: {
                    ...state[payload.wordType],
                    [payload.word]: {
                        images: payload.imageData,
                        audio: payload.audioData
                    }
                }
            };
        case GET_SOCIAL_WORD_DATA:
            return {
                ...state,
                social: {
                    ...state.social,
                    ...payload
                }
            };
        case SET_STARS_EARNED:
            return {
                ...state,
                starsEarned: payload
            }
            break;
        default:
            return state;
    }
};