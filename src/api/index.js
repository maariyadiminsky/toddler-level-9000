import axios from "axios";

import { 
    UNSPLASH_API_BASE_URL,
    DICTIONARY_API_BASE_URL,
    TODDLER_SOCIAL_WORDS_API_BASE_URL 
} from "./const";

export const unsplashAPI = axios.create({
    baseURL: UNSPLASH_API_BASE_URL,
    headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
        "Accept-Version": "v1"
    }
});

export const dictionaryAPI = axios.create({
    baseURL: DICTIONARY_API_BASE_URL
});

export const toddlerSocialWordsApi = axios.create({
    baseURL: TODDLER_SOCIAL_WORDS_API_BASE_URL
});