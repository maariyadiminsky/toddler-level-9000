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
    "red", "blue", "yellow", "white", "black",
    "pink", "purple", "brown", "orange", "green"
];
export const FOOD_WORDS = [
    "banana", "cheese", "bread", "fish", "milk",
    "pizza", "strawberry", "watermelon",
    "salad", "sushi", "tea", "water", "avocado",
    "carrot", "tomato", "apple"
];
export const ANIMAL_WORDS = [
    "dog", "cat", "pig", "goat", 
    "horse", "lion", "tiger",
    "bear", "frog", "rabbit", "snake",
    "zebra", "alligator", "yak",
    "elephant", "monkey", "octopus",
    "iguana", "jellyfish", "fish", "fox"
];
export const SOCIAL_WORDS = [
    "hi", "bye", "yes", "no", "thank you",
    "sorry", "eat", "sleep", "pee", "poo",
    "hug", "kiss", "play", "tickle", "love",
    "cry", "smile", "sit", "stand", "dance",
    "careful", "day", "night", "run", "stop",
    "drink", "walk", "bath", "see", "moon"
];
export const BODY_WORDS = [
    "eyes", "nose", "lips", "mouth", "ears",
    "hair", "hands", "fingers", "legs", "feet"
];

// errors
export const WORD_TYPE_ERRORS = {
    WORD_TYPE_DOES_NOT_EXIST: (type) => `${type.toUppercase()} does not exist not a valid word type.`
}

// warnings
export const GAME_NOT_AVAILABLE_TEMP_MESSAGE = "Sorry this game is WIP. Please select another.";