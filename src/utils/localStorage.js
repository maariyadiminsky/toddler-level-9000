import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE,
    BODY_TYPE,

    NUMBER_WORDS,
    FOOD_WORDS,
    COLOR_WORDS,
    ANIMAL_WORDS,
    SOCIAL_WORDS,
    BODY_WORDS,

    WORD_TYPE_ERRORS
} from "../const";

// words
export const getNewWordsArray = (wordType) => {
    switch(wordType) {
        case NUMBER_TYPE:
            return [...NUMBER_WORDS];
        case FOOD_TYPE:
            return [...FOOD_WORDS];
        case COLOR_TYPE:
            return [...COLOR_WORDS];
        case ANIMAL_TYPE:
            return [...ANIMAL_WORDS];
        case SOCIAL_TYPE:
            return [...SOCIAL_WORDS];
        case BODY_TYPE:
            return [...BODY_WORDS];
        default:
            throw new Error(WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(wordType));
    }
}

// localStorage
export const hasKeyExistInLocalStorage = (key) => localStorage.getItem(key);
