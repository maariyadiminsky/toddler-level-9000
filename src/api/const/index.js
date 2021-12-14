import { DEFAULT } from '../../const';

// unsplash API endpoints
export const UNSPLASH_API_BASE_URL = 'https://api.unsplash.com';
export const UNSPLASH_SEARCH_PHOTOS_ENDPOINT = '/search/photos';

// dictionary API endpoints
export const DICTIONARY_API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export const DICTIONARY_WORD_ENDPOINT = (word = DEFAULT.STRING) => `/${word}`;

// toddlerSocialWords API endpoints
export const TODDLER_SOCIAL_WORDS_API_BASE_URL = 'https://toddler-social-words-api.herokuapp.com';
export const TODDLER_SOCIAL_WORDS_FIRST_WORDS_ENDPOINT = '/first-ten-words';
export const TODDLER_SOCIAL_WORDS_SECOND_WORDS_ENDPOINT = '/second-ten-words';
export const TODDLER_SOCIAL_WORDS_THIRD_WORDS_ENDPOINT = '/third-ten-words';

// errors
export const FETCH_ERROR_TYPES = {
    WORD_DOES_NOT_EXIST: 'No data exists for that word!'
}