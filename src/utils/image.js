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

let start = "";
let end = ""
const ANIMAL_IMAGE_URL = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/Animal-Flashcards-${end}.jpg?ssl=1`
const ANIMAL_IMAGE_URL_2 = (start, end) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/${end}-alphabet-flashcards.jpg?ssl=1`
let useFirstImageUrl = true;
export const getCorrectAnimalChoiceImageUrl = (word) => {
    start = "";
    end = "";
    useFirstImageUrl = true;

    switch(word) {
        case "Dog":
            start = "2";
            end = "D";
            break;
        case "Cat":
            start = "0";
            end = "C";
            break;
        case "Pig":
            start = "0";
            end = "P";
            break;
        case "Goat":
            start = "0";
            end = "G";
            break;
        case "Horse":
            start = "1";
            end = "H";
            break;
        case "Lion":
            start = "0";
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
            start = "0";
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
            start = "0";
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
            start = "0";
            end = "Y";
            break;
        case "Fox":
            start = "1";
            end = "X";
            break;
        case "Fish":
            start = "1";
            end = "F";
            useFirstImageUrl = false;
            break;
        default:
            start = "";
            end = "";
            useFirstImageUrl = false;
            break;
    }

    return useFirstImageUrl ? ANIMAL_IMAGE_URL(start, end) : ANIMAL_IMAGE_URL_2(start, end);
}