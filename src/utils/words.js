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

import { generateRandomNumber } from "./";

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

export const getCustomCSSForWordsToChooseFrom = (wordType, word) => {
    switch(wordType) {
        case COLOR_TYPE:
            switch(word) {
                case "black":
                    return "from-gray-800 to-gray-900 text-white";
                case "white":
                    return "from-gray-50 to-gray-100 text-gray-600";
                case "orange":
                    return "from-yellow-400 to-yellow-600 text-white";
                case "brown":
                    return "from-yellow-700 to-yellow-900 text-white";
                case "yellow":
                    return "from-yellow-300 to-yellow-400 text-white";
                default:
                    return `from-${word}-300 to-${word}-600 text-white`;
            }
        case NUMBER_TYPE:
        case ANIMAL_TYPE:
        case FOOD_TYPE:
                return "from-gray-50 to-gray-100 text-black font-bold";
        default:
            throw new Error(WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(wordType));
    }
}

export const generateRandomItem = (items, removeDuplicates = false, randomNumberLimit = items?.length) => {
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
        const randomIndex = generateRandomNumber(amount);

        result[randomIndex] =  includeThisItem;
    }

    return result;
}

export const getCorrectImageURL = (url, wordType) => {
    switch(wordType) {
        case SOCIAL_TYPE:
            return `https://docs.google.com/uc?export=open&id=${url}`;
        default:
            return url;
    }
}

export const getCorrectWordToFetchImageFromType = (word, wordType) => {
    switch(wordType) {
        case NUMBER_TYPE:
            return `number ${word}`;
        default:
            return word;
    }
}

export const getCorrectWordToFetchAudioFromType = (word, wordType) => {
    switch(wordType) {
        case NUMBER_TYPE:
            switch(word) {
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
                case 7:
                    return "seven";
                case 8:
                    return "eight";
                case 9: 
                    return "nine";
                case 10:
                    return "ten";
                default:
                    return "zero"
            }
        default:
            return word;
    }
}