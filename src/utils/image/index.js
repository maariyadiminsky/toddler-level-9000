import {
    DEFAULT,
    ANIMAL_TYPE,
    FOOD_TYPE,
    FOOD_TYPES,
    SOCIAL_TYPE,
    ANIMALS,
    FOOD,
    NUMBERS,
    LETTERS
} from '../../const';

export const SOCIAL_URL = (url) => `https://docs.google.com/uc?export=open&id=${url}`;
export const getCorrectImageURL = (url = DEFAULT.STRING, wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case SOCIAL_TYPE:
            return SOCIAL_URL(url);
        default:
            return url;
    }
}

export const getCorrectImageUrlBasedOnType = (item = DEFAULT.STRING, wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case ANIMAL_TYPE:
            return getCorrectAnimalsChoiceImageUrl(item);
        case FOOD_TYPE:
            return getCorrectFoodChoiceImageUrl(item);
        default:
            return DEFAULT.STRING;
    }
}
let start = NUMBERS.ZERO;
let end = DEFAULT.STRING;
const ANIMALS_IMAGE_URL = (start = DEFAULT.ZERO, end = DEFAULT.STRING) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/ANIMALS-Flashcards-${end}.jpg?ssl=1`
const ANIMALS_IMAGE_URL_2 = (start = DEFAULT.ZERO, end = DEFAULT.STRING) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/05/${end}-alphabet-flashcards.jpg?ssl=1`
let useFirstANIMALSImageUrl = DEFAULT.BOOL_TRUE;
export const getCorrectAnimalsChoiceImageUrl = (word = DEFAULT.STRING) => {
    start = NUMBERS.ZERO;
    end = DEFAULT.STRING;
    useFirstANIMALSImageUrl = DEFAULT.BOOL_TRUE;

    switch(word) {
        case ANIMALS.DOG:
            start = NUMBERS.TWO;
            end = LETTERS.D;
            break;
        case ANIMALS.CAT:
            end = LETTERS.C;
            break;
        case ANIMALS.PIG:
            end = LETTERS.P;
            break;
        case ANIMALS.GOAT:
            end = LETTERS.G;
            break;
        case ANIMALS.HORSE:
            start = NUMBERS.ONE;
            end = LETTERS.H;
            break;
        case ANIMALS.LION:
            end = LETTERS.L;
            break;
        case ANIMALS.TIGER:
            start = NUMBERS.ONE;
            end = LETTERS.T;
            break;
        case ANIMALS.BEAR:
            start = NUMBERS.ONE;
            end = LETTERS.B;
            break;
        case ANIMALS.FROG:
            start = NUMBERS.TWO;
            end = LETTERS.F;
            break;
        case ANIMALS.RABBIT:
            start = NUMBERS.ONE;
            end = LETTERS.R;
            break;
        case ANIMALS.SNAKE:
            start = NUMBERS.ONE;
            end = LETTERS.S;
            break;
        case ANIMALS.ZEBRA:
            start = NUMBERS.ONE;
            end = LETTERS.Z;
            break;
        case ANIMALS.ALLIGATOR:
            end = LETTERS.A;
            break;
        case ANIMALS.ELEPHANT:
            start = NUMBERS.TWO;
            end = LETTERS.E;
            break;
        case ANIMALS.MONKEY:
            start = NUMBERS.TWO;
            end = LETTERS.M;
            break;
        case ANIMALS.OCTOPUS:
            end = LETTERS.O;
            break;
        case ANIMALS.IGUANA:
            start = NUMBERS.TWO;
            end = LETTERS.I;
            break;
        case ANIMALS.JELLYFISH:
            start = NUMBERS.TWO;
            end = LETTERS.J;
            break;
        case ANIMALS.YAK:
            end = LETTERS.Y;
            break;
        case ANIMALS.FOX:
            start = NUMBERS.ONE;
            end = LETTERS.X;
            useFirstANIMALSImageUrl = DEFAULT.BOOL_FALSE;
            break;
        case ANIMALS.FISH:
            start = NUMBERS.ONE;
            end = LETTERS.F;
            useFirstANIMALSImageUrl = DEFAULT.BOOL_FALSE;
            break;
        default:
            break;
    }

    return useFirstANIMALSImageUrl ? ANIMALS_IMAGE_URL(start, end) : ANIMALS_IMAGE_URL_2(start, end);
}

let foodType = FOOD_TYPE;
const FOOD_IMAGE_URL = (start = DEFAULT.STRING, end = DEFAULT.STRING, foodType = DEFAULT.STRING) => `https://i${start}.wp.com/www.flashcardsforkindergarten.com/wp-content/uploads/2020/06/${foodType}-flashcard-${end}.jpg?ssl=1`
export const getCorrectFoodChoiceImageUrl = (word = DEFAULT.STRING) => {
    start = NUMBERS.ZERO;
    end = word;
    foodType = FOOD_TYPE;

    switch(word) {
        case FOOD.CHEESE:
            start = NUMBERS.TWO;
            break;
        case FOOD.TEA:
            foodType = FOOD_TYPES.DRINK;
            break;
        case FOOD.MILK:
            foodType = FOOD_TYPES.DRINK;
            break;
        case FOOD.WATER:
            start = NUMBERS.TWO;
            foodType = FOOD_TYPES.DRINK;
            break;
        case FOOD.AVOCADO:
            start = NUMBERS.ONE;
            foodType = FOOD_TYPES.FRUIT;
            break;
        case FOOD.CARROT:
            foodType = FOOD_TYPES.VEGETABLE;
            break;
        case FOOD.TOMATO:
            start = NUMBERS.ONE;
            foodType = FOOD_TYPES.VEGETABLE;
            break;
        case FOOD.APPLE:
            start = NUMBERS.ONE;
            foodType = FOOD_TYPES.FRUIT;
            break;
        case FOOD.BANANA:
            start = NUMBERS.TWO;
            foodType = FOOD_TYPES.FRUIT;
            break;
        case FOOD.STRAWBERRY:
            start = NUMBERS.ONE;
            foodType = FOOD_TYPES.FRUIT;
            break;
        case FOOD.WATERMELON:
            start = NUMBERS.ONE;
            foodType = FOOD_TYPES.FRUIT;
            break;
        default:
            break;
    }

    return FOOD_IMAGE_URL(start, end, foodType);
}