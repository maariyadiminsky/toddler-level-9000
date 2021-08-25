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

export const getWordAmountToShowAtOneTime = (wordType) => {
    switch(wordType) {
        case NUMBER_TYPE:
        case FOOD_TYPE:
        case COLOR_TYPE:
        case ANIMAL_TYPE:
        case SOCIAL_TYPE:
        case BODY_TYPE:
            return 5;
        default:
            throw new Error(WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(wordType));
    }
}

export const generateRandomItem = (items, removeDuplicates = false) => {
    let randomNum = generateRandomNumber(items.length);

    if (removeDuplicates) {
        while (indexAlreadyAddedInResultArr[randomNum]) {
            randomNum = generateRandomNumber(items.length)
        }

        indexAlreadyAddedInResultArr[randomNum] = true;
    }

    return items[randomNum];
}

export const generateRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

// so 0 - 5 would include 0 and 5
export const generateRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// to make sure the same item isn't added twice
let indexAlreadyAddedInResultArr = {};
export const generateRandomItems = (items, amount, includeThisItem = null) => {
    let result = [];
    indexAlreadyAddedInResultArr = {};

    // picks random words in words array
    while(result.length !== amount) {
        result = [...result, generateRandomItem(items, true)];
    }

    // replace a word randomly in the array with the correct word
    if (includeThisItem && !result.includes(includeThisItem)) {
        const randomIndex = generateRandomNumber(items.length - 1);

        result[randomIndex] =  includeThisItem;
    }

    return result;
}