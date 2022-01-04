// auth
export const AUTH0_AUDIENCE = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`;
export const AUTH0_SCOPE = 'read:current_user';
export const AUTH0_REDIRECT_URI_AFTER_LOGIN = window.location.origin;

// paths
export const ROOT_PATH = '/';
// later change to something like /games/:id
export const GAME_PATH = '/games';
export const CHOICE_GAME_PATH_GENERAL = `${GAME_PATH}/:wordTypeId`;
export const CHOICE_GAME_PATH = (type) => `${GAME_PATH}/${type}`;

// svg types
export const SVG_TYPES = {
    SMILE: 'smile' 
}

// word types
export const COLOR_TYPE = 'colors';
export const ANIMAL_TYPE = 'animals';
export const NUMBER_TYPE = 'numbers';
export const FOOD_TYPE = 'food';
export const FOOD_TYPES = {
    DRINK: 'drink',
    VEGETABLE: 'vegetable',
    FRUIT: 'fruit',
}
export const SOCIAL_TYPE = 'social';
export const BODY_TYPE = 'body';

export const MATCH_GAME = 'matchGame';
export const REFRIGERATOR_GAME = 'refrigeratorGame';
export const BASKET_GAME = 'basketGame';

export const SOCIAL_TYPE_FIRST = 'firstTenWords';
export const SOCIAL_TYPE_SECOND = 'secondTenWords';
export const SOCIAL_TYPE_THIRD = 'thirdTenWords';

export const LETTERS = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    I: 'I',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: 'O',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z'
}

export const NUMBERS = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10
}
export const NUMBER_WORDS = {
    ZERO: 'zero',
    ONE: 'one',
    TWO: 'two',
    THREE: 'three',
    FOUR: 'four',
    FIVE: 'five',
    SIX: 'six',
    SEVEN: 'seven',
    EIGHT: 'eight',
    NINE: 'nine',
    TEN: 'ten'
}

export const NUMBERS_ARR = [ 
    NUMBERS.ONE, NUMBERS.TWO, NUMBERS.THREE, NUMBERS.FOUR, NUMBERS.FIVE, 
    NUMBERS.SIX, NUMBERS.SEVEN, NUMBERS.EIGHT, NUMBERS.NINE, NUMBERS.TEN 
];

export const COLORS = {
    RED: 'red',
    BLUE: 'blue',
    YELLOW: 'yellow',
    WHITE: 'white',
    BLACK: 'black',
    PINK: 'pink',
    PURPLE: 'purple',
    BROWN: 'brown',
    ORANGE: 'orange',
    GREEN: 'green'
}
export const COLOR_WORDS = [
    COLORS.RED, COLORS.BLUE, COLORS.YELLOW, COLORS.WHITE, COLORS.BLACK,
    COLORS.PINK, COLORS.PURPLE, COLORS.BROWN, COLORS.ORANGE, COLORS.GREEN
];

export const FOOD = {
    BANANA: 'banana',
    CHEESE: 'cheese',
    BREAD: 'bread',
    FISH: 'fish',
    MILK: 'milk',
    PIZZA: 'pizza',
    STRAWBERRY: 'strawberry',
    WATERMELON: 'watermelon',
    SALAD: 'salad',
    SUSHI: 'sushi',
    TEA: 'tea',
    WATER: 'water',
    AVOCADO: 'avocado',
    CARROT: 'carrot',
    TOMATO: 'tomato',
    APPLE: 'apple'
}
export const FOOD_WORDS = [
    FOOD.BANANA, FOOD.CHEESE, FOOD.BREAD, FOOD.FISH, FOOD.MILK,
    FOOD.PIZZA, FOOD.STRAWBERRY, FOOD.WATERMELON,
    FOOD.SALAD, FOOD.SUSHI, FOOD.TEA, FOOD.WATER, FOOD.AVOCADO,
    FOOD.CARROT, FOOD.TOMATO, FOOD.APPLE
];

export const ANIMALS = {
    DOG:'dog',
    CAT:'cat',
    PIG:'pig',
    GOAT:'goat',
    HORSE:'horse',
    LION:'lion',
    TIGER:'tiger',
    BEAR:'bear',
    FROG:'frog',
    RABBIT:'rabbit',
    SNAKE:'snake',
    ZEBRA:'zebra',
    ALLIGATOR:'rabbit',
    YAK:'yak',
    ELEPHANT:'elephant',
    MONKEY: 'monkey',
    OCTOPUS: 'octopus',
    IGUANA: 'iguana',
    JELLYFISH: 'jellyfish',
    FISH: 'fish',
    FOX: 'fox'
}
export const ANIMAL_WORDS = [
    ANIMALS.DOG, ANIMALS.CAT, ANIMALS.PIG, ANIMALS.GOAT, 
    ANIMALS.HORSE, ANIMALS.LION, ANIMALS.TIGER,
    ANIMALS.BEAR, ANIMALS.FROG, ANIMALS.RABBIT, ANIMALS.SNAKE,
    ANIMALS.ZEBRA, ANIMALS.ALLIGATOR, ANIMALS.YAK,
    ANIMALS.ELEPHANT, ANIMALS.MONKEY, ANIMALS.OCTOPUS,
    ANIMALS.IGUANA, ANIMALS.JELLYFISH, ANIMALS.FISH, ANIMALS.FOX
];

export const SOCIAL = {
    HI: 'hi',
    BYE: 'bye',
    YES: 'yes',
    NO: 'no',
    THANK_YOU: 'thank you',
    SORRY: 'sorry',
    EAT: 'eat',
    SLEEP: 'sleep',
    PEE: 'pee',
    POO: 'poo',
    HUG: 'hug',
    KISS: 'kiss',
    PLAY: 'play',
    TICKLE: 'tickle',
    LOVE: 'love',
    CRY: 'cry',
    SMILE: 'smile',
    SIT: 'sit',
    STAND: 'stand',
    DANCE: 'dance',
    CAREFUL: 'careful',
    DAY: 'day',
    NIGHT: 'night',
    RUN: 'run',
    STOP: 'stop',
    DRINK: 'drink',
    WALK: 'walk',
    BATH: 'bath',
    SEE: 'see',
    MOON: 'moon'
}
export const SOCIAL_WORDS = [
    SOCIAL.HI, SOCIAL.BYE, SOCIAL.YES, SOCIAL.NO, SOCIAL.THANK_YOU,
    SOCIAL.SORRY, SOCIAL.EAT, SOCIAL.SLEEP, SOCIAL.PEE, SOCIAL.POO,
    SOCIAL.HUG, SOCIAL.KISS, SOCIAL.PLAY, SOCIAL.TICKLE, SOCIAL.LOVE,
    SOCIAL.CRY, SOCIAL.SMILE, SOCIAL.SIT, SOCIAL.STAND, SOCIAL.DANCE,
    SOCIAL.CAREFUL, SOCIAL.DAY, SOCIAL.NIGHT, SOCIAL.RUN, SOCIAL.STOP,
    SOCIAL.DRINK, SOCIAL.WALK, SOCIAL.BATH, SOCIAL.SEE, SOCIAL.MOON
];

export const BODY = {
    EYES: 'eyes',
    NODE: 'nose',
    LIPS: 'lips',
    MOUTH: 'mouth',
    EARS: 'ears',
    HAIR: 'hair',
    HANDS: 'hands',
    FINGERS: 'fingers',
    LEGS: 'legs',
    FEET: 'feet'
}
export const BODY_WORDS = [
    BODY.EYES, BODY.NOSE, BODY.LIPS, BODY.MOUTH, BODY.EARS,
    BODY.HAI, BODY.HANDS, BODY.FINGERS, BODY.LEGS, BODY.FEET
];

// errors
export const WORD_TYPE_ERRORS = {
    WORD_TYPE_DOES_NOT_EXIST: (type) => `${type.toUpperCase()} does not exist not a valid word type.`
}

// warnings
export const GAME_NOT_AVAILABLE_TEMP_MESSAGE = 'Sorry this game is WIP. Please select another.';

export const MOCK = {
    EXISTS: 'Exists!',
    PATH: '/somePath',
}

// default param types
export const DEFAULT = {
    STRING: null,
    NUMBER: null,
    ARRAY: [],
    OBJECT: {},
    BOOL_FALSE: false,
    BOOL_TRUE: true,
    FUNCTION: () => null,
    NULL: null,
    UNDEFINED: undefined,
};