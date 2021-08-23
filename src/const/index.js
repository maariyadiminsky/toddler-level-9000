// auth
export const AUTH0_AUDIENCE = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`;
export const AUTH0_SCOPE = "read:current_user";
export const AUTH0_REDIRECT_URI_AFTER_LOGIN = window.location.origin;

// word types
export const COLOR_TYPE = "colors";
export const ANIMAL_TYPE = "animals";
export const NUMBER_TYPE = "numbers";
export const FOOD_TYPE = "food";
export const SOCIAL_TYPE = "social";
export const BODY_TYPE = "body";

export const SOCIAL_TYPE_FIRST = "firstTenWords";
export const SOCIAL_TYPE_SECOND = "secondTenWords";
export const SOCIAL_TYPE_THIRD = "thirdTenWords";

export const NUMBER_WORDS = [ 
    1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10 
];
export const COLOR_WORDS = [
    "red", "blue", "yellow", "white", "black",
    "pink", "purple", "brown", "orange", "green"
];
export const FOOD_WORDS = [
    "banana", "cheese", "bread", "eggs", "milk",
    "pizza", "strawberry", "juice", "watermelon"
];
export const ANIMAL_WORDS = [
    "Dog", "Cat", "Cow", "Pig", "Sheep", 
    "Horse", "Duck", "Lion", "Chicken", "Tiger", 
    "Bear", "Frog", "Bunny", "Camel", "Snake",
    "Giraffe", "Fox", "Deer", "Zebra", "Alligator", 
    "Elephant", "Monkey", "Bird", "Gorilla", "Beaver",
    "Wolf", "Mouse", "Fish", "Squirrel", "Buffalo"
];
export const SOCIAL_WORDS = [
    "Hi", "Bye", "Yes", "No", "Thank you",
    "Sorry", "Eat", "Sleep", "Pee", "Poo",
    "Hug", "Kiss", "Play", "Tickle", "Love",
    "Cry", "Smile", "Sit", "Stand", "Dance",
    "Careful", "Day", "Night", "Run", "Stop",
    "Drink", "Walk", "Bath", "See", "Moon"
];
export const BODY_WORDS = [
    "Eyes", "Nose", "Lips", "Mouth", "Ears",
    "Hair", "Hands", "Fingers", "Legs", "Feet"
];

// errors
export const WORD_TYPE_ERRORS = {
    WORD_TYPE_DOES_NOT_EXIST: (type) => `${type.toUppercase()} does not exist not a valid word type.`
}