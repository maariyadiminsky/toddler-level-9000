import {
    DEFAULT,
    NUMBERS,
    COLORS,
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE,
    BODY_TYPE,

    NUMBERS_ARR,
    NUMBER_WORDS,
    FOOD_WORDS,
    COLOR_WORDS,
    ANIMAL_WORDS,
    SOCIAL_WORDS,
    BODY_WORDS,

    WORD_TYPE_ERRORS
} from '../../const';

import { generateRandomNumber } from '../';

const WORD_TYPE_DOES_NOT_EXIST_ERROR = (wordType) => new Error(WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(wordType));
export const getNewWordsArray = (wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case NUMBER_TYPE:
            return [...NUMBERS_ARR];
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
            throw WORD_TYPE_DOES_NOT_EXIST_ERROR(wordType);
    }
}

export const getWordAmountToShowAtOneTime = (wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case NUMBER_TYPE:
        case FOOD_TYPE:
        case COLOR_TYPE:
        case ANIMAL_TYPE:
        case SOCIAL_TYPE:
        case BODY_TYPE:
            return NUMBERS.FIVE;
        default:
            throw WORD_TYPE_DOES_NOT_EXIST_ERROR(wordType);
    }
}

export const getCustomCSSForWordsToChooseFrom = (wordType = DEFAULT.STRING, word = DEFAULT.STRING) => {
    switch(wordType) {
        case COLOR_TYPE:
            switch(word) {
                case COLORS.BLACK:
                    return 'from-gray-800 to-gray-900 text-white';
                case COLORS.WHITE:
                    return 'from-gray-50 to-gray-100 text-gray-600';
                case COLORS.ORANGE:
                    return 'from-yellow-400 to-yellow-600 text-white';
                case COLORS.BROWN:
                    return 'from-yellow-700 to-yellow-900 text-white';
                case COLORS.YELLOW:
                    return 'from-yellow-300 to-yellow-400 text-white';
                default:
                    return `from-${word}-300 to-${word}-600 text-white`;
            }
        case NUMBER_TYPE:
        case ANIMAL_TYPE:
        case FOOD_TYPE:
                return 'from-gray-50 to-gray-100 text-black font-bold';
        default:
            throw WORD_TYPE_DOES_NOT_EXIST_ERROR(wordType);
    }
}

export const generateRandomItem = (items = DEFAULT.NULL, removeDuplicates = DEFAULT.BOOL_FALSE, randomNumberLimit = items?.length) => {
    let randomNum = generateRandomNumber(randomNumberLimit);

    if (removeDuplicates) {
        while (indexAlreadyAddedInResultArr[randomNum]) {
            randomNum = generateRandomNumber(randomNumberLimit)
        }

        indexAlreadyAddedInResultArr[randomNum] = true;
    }

    return items[randomNum];
}

// so 0 - 5 would include 0 and 5
export const generateRandomNumberBetween = (min = 0, max = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// to make sure the same item isn't added twice
let indexAlreadyAddedInResultArr = {};
export const generateRandomItems = (items = DEFAULT.NULL, amount = 0, includeThisItem = DEFAULT.NULL) => {
    let result = [];
    indexAlreadyAddedInResultArr = {};

    // picks random words in words array
    while(result.length !== amount) {
        result = [...result, generateRandomItem(items, true)];
    }

    // replace a word randomly in the array with the correct word
    if (includeThisItem && !result.includes(includeThisItem)) {
        const randomIndex = generateRandomNumber(amount);

        result[randomIndex] =  includeThisItem;
    }

    return result;
}

export const getCorrectWordForNumberImageType = (word) => `number ${word}`;
export const getCorrectWordToFetchImageFromType = (word = DEFAULT.STRING, wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case NUMBER_TYPE:
            return getCorrectWordForNumberImageType(word);
        default:
            return word;
    }
}

export const getCorrectWordToFetchAudioFromType = (word = DEFAULT.STRING, wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case NUMBER_TYPE:
            switch(word) {
                case NUMBERS.ONE:
                    return NUMBER_WORDS.ONE;
                case NUMBERS.TWO:
                    return NUMBER_WORDS.TWO;
                case NUMBERS.THREE:
                    return NUMBER_WORDS.THREE;
                case NUMBERS.FOUR:
                    return NUMBER_WORDS.FOUR;
                case NUMBERS.FIVE:
                    return NUMBER_WORDS.FIVE;
                case NUMBERS.SIX:
                    return NUMBER_WORDS.SIX;
                case NUMBERS.SEVEN:
                    return NUMBER_WORDS.SEVEN;
                case NUMBERS.EIGHT:
                    return NUMBER_WORDS.EIGHT;
                case NUMBERS.NINE: 
                    return NUMBER_WORDS.NINE;
                case NUMBERS.TEN:
                    return NUMBER_WORDS.TEN;
                default:
                    return NUMBER_WORDS.ZERO
            }
        default:
            return word;
    }
}