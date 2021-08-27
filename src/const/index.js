// auth
export const AUTH0_AUDIENCE = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`;
export const AUTH0_SCOPE = "read:current_user";
export const AUTH0_REDIRECT_URI_AFTER_LOGIN = window.location.origin;

// paths
export const ROOT_PATH = "/";
// later change to something like /games/:id
export const GAME_PATH = "/games";
export const CHOICE_GAME_PATH_GENERAL = `${GAME_PATH}/:wordTypeId`;
export const CHOICE_GAME_PATH = (type) => `${GAME_PATH}/${type}`;

// word types
export const COLOR_TYPE = "colors";
export const ANIMAL_TYPE = "animals";
export const NUMBER_TYPE = "numbers";
export const FOOD_TYPE = "food";
export const SOCIAL_TYPE = "social";
export const BODY_TYPE = "body";

export const MATCH_GAME = "matchGame";
export const REFRIGERATOR_GAME = "refrigeratorGame";
export const BASKET_GAME = "basketGame";

export const SOCIAL_TYPE_FIRST = "firstTenWords";
export const SOCIAL_TYPE_SECOND = "secondTenWords";
export const SOCIAL_TYPE_THIRD = "thirdTenWords";

export const NUMBER_WORDS = [ 
    1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10 
];

export const COLOR_WORDS = [
    "Red", "Blue", "Yellow", "White", "Black",
    "Pink", "Purple", "Brown", "Orange", "Green"
];
export const FOOD_WORDS = [
    "Banana", "Cheese", "Bread", "Fish", "Milk",
    "Pizza", "Strawberry", "Watermelon",
    "Salad", "Sushi", "Tea", "Water", "Avocado",
    "Carrot", "Tomato", "Apple"
];
export const ANIMAL_WORDS = [
    "Dog", "Cat", "Pig", "Goat", 
    "Horse", "Lion", "Tiger",
    "Bear", "Frog", "Rabbit", "Snake",
    "Zebra", "Alligator", "Yak",
    "Elephant", "Monkey", "Octopus",
    "Iguana", "Jellyfish", "Fish", "Fox"
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