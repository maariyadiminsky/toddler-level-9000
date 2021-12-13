import {
    ANIMAL_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE
} from '../const';

export const getCorrectImageURL = (url, wordType) => {
    switch(wordType) {
        case SOCIAL_TYPE:
            return `https://docs.google.com/uc?export=open&id=${url}`;
        default:
            return url;
    }
}

export const getCorrectImageUrlBasedOnType = (item, wordType) => {
    switch(wordType) {
        case ANIMAL_TYPE:
            return getCorrectAnimalChoiceImageUrl(item);
        case FOOD_TYPE:
            return getCorrectFoodChoiceImageUrl(item);
        default: 
            return '';
    }
}

let start = '0';
let end = ''
const ANIMAL_IMAGE_URL = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/Animal-Flashcards-${end}.jpg?ssl=1`
const ANIMAL_IMAGE_URL_2 = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/${end}-alphabet-flashcards.jpg?ssl=1`
let useFirstAnimalImageUrl = true;
const getCorrectAnimalChoiceImageUrl = (word) => {
    start = '0';
    end = '';
    useFirstAnimalImageUrl = true;

    switch(word) {
        case 'dog':
            start = '2';
            end = 'D';
            break;
        case 'cat':
            end = 'C';
            break;
        case 'pig':
            end = 'P';
            break;
        case 'goat':
            end = 'G';
            break;
        case 'horse':
            start = '1';
            end = 'H';
            break;
        case 'lion':
            end = 'L';
            break;
        case 'tiger':
            start = '1';
            end = 'T';
            break;
        case 'bear':
            start = '1';
            end = 'B';
            break;
        case 'frog':
            start = '2';
            end = 'F';
            break;
        case 'rabbit':
            start = '1';
            end = 'R';
            break;
        case 'snake':
            start = '1';
            end = 'S';
            break;
        case 'zebra':
            start = '1';
            end = 'Z';
            break;
        case 'alligator':
            end = 'A';
            break;
        case 'elephant':
            start = '2';
            end = 'E';
            break;
        case 'monkey':
            start = '2';
            end = 'M';
            break;
        case 'octopus':
            end = 'O';
            break;
        case 'iguana':
            start = '2';
            end = 'I';
            break;
        case 'jellyfish':
            start = '2';
            end = 'J';
            break;
        case 'yak':
            end = 'Y';
            break;
        case 'fox':
            start = '1';
            end = 'X';
            useFirstAnimalImageUrl = false;
            break;
        case 'fish':
            start = '1';
            end = 'F';
            useFirstAnimalImageUrl = false;
            break;
        default:
            break;
    }

    return useFirstAnimalImageUrl ? ANIMAL_IMAGE_URL(start, end) : ANIMAL_IMAGE_URL_2(start, end);
}

let foodType = 'food';
const FOOD_IMAGE_URL = (start, end, foodType) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/06/${foodType}-flashcard-${end}.jpg?ssl=1`
const getCorrectFoodChoiceImageUrl = (word = '') => {
    start = '0';
    end = word;
    foodType = 'food';

    switch(word) {
        case 'cheese':
            start = '2';
            break;
        case 'tea':
            foodType = 'drink';
            break;
        case 'milk':
            foodType = 'drink';
            break;
        case 'water':
            start = '2';
            foodType = 'drink';
            break;
        case 'avocado':
            start = '1';
            foodType = 'fruit';
            break;
        case 'carrot':
            foodType = 'vegetable';
            break;
        case 'tomato':
            start = '1';
            foodType = 'vegetable';
            break;
        case 'apple':
            start = '1';
            foodType = 'fruit';
            break;
        case 'banana':
            start = '2';
            foodType = 'fruit';
            break;
        case 'strawberry':
            start = '1';
            foodType = 'fruit';
            break;
        case 'watermelon':
            start = '1';
            foodType = 'fruit';
            break;
        default:
            break;
    }

    return FOOD_IMAGE_URL(start, end, foodType);
}