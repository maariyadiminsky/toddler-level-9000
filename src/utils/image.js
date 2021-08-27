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
            return "";
    }
}

let start = "0";
let end = ""
const ANIMAL_IMAGE_URL = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/Animal-Flashcards-${end}.jpg?ssl=1`
const ANIMAL_IMAGE_URL_2 = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/${end}-alphabet-flashcards.jpg?ssl=1`
let useFirstAnimalImageUrl = true;
const getCorrectAnimalChoiceImageUrl = (word) => {
    start = "0";
    end = "";
    useFirstAnimalImageUrl = true;

    switch(word) {
        case "Dog":
            start = "2";
            end = "D";
            break;
        case "Cat":
            end = "C";
            break;
        case "Pig":
            end = "P";
            break;
        case "Goat":
            end = "G";
            break;
        case "Horse":
            start = "1";
            end = "H";
            break;
        case "Lion":
            end = "L";
            break;
        case "Tiger":
            start = "1";
            end = "T";
            break;
        case "Bear":
            start = "1";
            end = "B";
            break;
        case "Frog":
            start = "2";
            end = "F";
            break;
        case "Rabbit":
            start = "1";
            end = "R";
            break;
        case "Snake":
            start = "1";
            end = "S";
            break;
        case "Zebra":
            start = "1";
            end = "Z";
            break;
        case "Alligator":
            end = "A";
            break;
        case "Elephant":
            start = "2";
            end = "E";
            break;
        case "Monkey":
            start = "2";
            end = "M";
            break;
        case "Octopus":
            end = "O";
            break;
        case "Iguana":
            start = "2";
            end = "I";
            break;
        case "Jellyfish":
            start = "2";
            end = "J";
            break;
        case "Yak":
            end = "Y";
            break;
        case "Fox":
            start = "1";
            end = "X";
            useFirstAnimalImageUrl = false;
            break;
        case "Fish":
            start = "1";
            end = "F";
            useFirstAnimalImageUrl = false;
            break;
        default:
            start = "";
            end = "";
            break;
    }

    return useFirstAnimalImageUrl ? ANIMAL_IMAGE_URL(start, end) : ANIMAL_IMAGE_URL_2(start, end);
}

let foodType = "food";
const FOOD_IMAGE_URL = (start, end, foodType) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/06/${foodType}-flashcard-${end}.jpg?ssl=1`
const getCorrectFoodChoiceImageUrl = (word) => {
    start = "0";
    end = "";
    foodType = "food";

    switch(word) {
        case "Bread":
            end = "bread";
            break;
        case "Cheese":
            start = "2";
            end = "cheese";
            break;
        case "Fish":
            end = "fish";
            break;
        case "Pizza":
            end = "pizza";
            break;
        case "Salad":
            end = "salad";
            break;
        case "Sushi":
            end = "sushi";
            break;
        case "Tea":
            end = "tea";
            foodType = "drink";
            break;
        case "Milk":
            end = "milk";
            foodType = "drink";
            break;
        case "Water":
            start = "2";
            end = "water";
            foodType = "drink";
            break;
        case "Avocado":
            start = "1";
            end = "avocado";
            foodType = "fruit";
            break;
        case "Carrot":
            end = "carrot";
            foodType = "vegetable";
            break;
        case "Tomato":
            start = "1";
            end = "tomato";
            foodType = "vegetable";
            break;
        case "Apple":
            start = "1";
            end = "apple";
            foodType = "fruit";
            break;
        case "Banana":
            start = "2";
            end = "banana";
            foodType = "fruit";
            break;
        case "Strawberry":
            start = "1";
            end = "strawberry";
            foodType = "fruit";
            break;
        case "Watermelon":
            start = "1";
            end = "watermelon";
            foodType = "fruit";
            break;
        default:
            start = "";
            end = "";
            break;
    }

    return FOOD_IMAGE_URL(start, end, foodType);
}