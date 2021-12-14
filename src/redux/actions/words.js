import { 
    unsplashAPI, 
    dictionaryAPI, 
    toddlerSocialWordsAPI
} from '../../api';
import {
    getCorrectWordToFetchImageFromType,
    getCorrectWordToFetchAudioFromType
} from '../../utils/words';
import { 
    UNSPLASH_SEARCH_PHOTOS_ENDPOINT,
    DICTIONARY_WORD_ENDPOINT,
    TODDLER_SOCIAL_WORDS_FIRST_WORDS_ENDPOINT,
    TODDLER_SOCIAL_WORDS_SECOND_WORDS_ENDPOINT,
    TODDLER_SOCIAL_WORDS_THIRD_WORDS_ENDPOINT,

    FETCH_ERROR_TYPES
} from '../../api/const';
import { 
    GET_MAIN_WORD_DATA,
    GET_SOCIAL_WORD_DATA,
    ERROR_FETCHING_DATA,

    RESPONSE_SUCCESS,
    RESPONSE_ERROR
} from './types';
import { 
    DEFAULT,
    ROOT_PATH,
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE,
    SOCIAL_TYPE_FIRST,
    SOCIAL_TYPE_SECOND,
    SOCIAL_TYPE_THIRD
} from '../../const';

import { setLocalStorageData } from './localStorage';

const fetchWordDataUnsplashParamOptions = {
    'per_page': 5, // number of items returned
    'order_by': 'relevant',
    'orientation': 'squarish', // all images come back with same orientation
}

const initial_response = {
    status: RESPONSE_ERROR,
    data: {},
    error: ''
}
export const fetchWordData = (wordType = DEFAULT.STRING, word = DEFAULT.STRING, 
    options = {
        // there are 3 endpoints, each with 10 words
        // this lets them know which 10 words you want
        socialType: SOCIAL_TYPE_FIRST
    } 
) => (
    async(dispatch) => {
        if (word.length === 0) return;
    
        let response = initial_response;
        switch(wordType) {
            case COLOR_TYPE:
            case ANIMAL_TYPE:
            case NUMBER_TYPE:
            case FOOD_TYPE:
                await dispatch(fetchMainWord(wordType, word))
                .then(data => {
                    response = {
                        ...response,
                        data,
                        status: RESPONSE_SUCCESS
                    }
                })
                break;
            case SOCIAL_TYPE:
                await dispatch(fetchSocialWords(options))
                .then(data => {
                    response = {
                        ...response,
                        data,
                        status: RESPONSE_SUCCESS
                    }
                })
                break;
            default:
                break;
        }

        return response;
    }
)

const fetchMainWord = (wordType = DEFAULT.STRING, word = DEFAULT.STRING) => (
    async(dispatch, getState) => {
        // first fetch image data
        const imageData = await fetchImageDataForMainWord(getCorrectWordToFetchImageFromType(word, wordType), dispatch);
        // second fetch audio data
        const audioData = await fetchAudioDataForMainWord(getCorrectWordToFetchAudioFromType(word, wordType), dispatch);

        // set the data in redux
        if (imageData && audioData) {
            // set data in redux
            dispatch({
                type: GET_MAIN_WORD_DATA,
                payload: { 
                    wordType,
                    word,
                    imageData,
                    audioData
                }
            });

            const { auth: { userId }, localStorage } = getState();

            // then set updated data in localStorage
            dispatch(setLocalStorageData(userId));

            return localStorage[wordType][word];
        }
    }
);

const fetchSocialWords = ({ socialType = DEFAULT.STRING }) => (
    async(dispatch, getState) => {
        const endpoint = findEndpointForSocialWordType(socialType);
        const data = await fetchSocialWordsData(endpoint, dispatch);
        
        if (data) {
            // set data in redux
            dispatch({
                type: GET_SOCIAL_WORD_DATA,
                payload: data
            });

            const { auth: { userId }, localStorage } = getState();

            // then set updated data in localStorage
            dispatch(setLocalStorageData(userId));

            return localStorage[SOCIAL_TYPE];
        }
    }
)

const fetchImageDataForMainWord = (word = DEFAULT.STRING, dispatch = DEFAULT.NULL) => (
    unsplashAPI.get(UNSPLASH_SEARCH_PHOTOS_ENDPOINT, {
        params: {
            'query': word,
            ...fetchWordDataUnsplashParamOptions
        }
    }).then(({ data: { results }}) => 
        results.map(item => ({
            id: item.id,
            altText: item.alt_description,
            imageUrl: item.urls.small,
            credits: {
                name: item.user.name,
                profileLink: item.user.links.html,
                imageLink: item.links.html
            }
        }))
    ).catch(error => {
        console.log(`ERROR IN fetching images. ACTION: fetchWordData. ATTENTION: ${error}`);
        dispatch({
            type: ERROR_FETCHING_DATA
        });
    })
);

const fetchAudioDataForMainWord = (word = DEFAULT.STRING, dispatch = DEFAULT.NULL) => (
    dictionaryAPI.get(DICTIONARY_WORD_ENDPOINT(word))
        .then(({ data }) => {
            if (data && data[0].phonetics && data[0].phonetics.length > 0) {
                // this url changes sometimes since it comes from a developer offering the API for free 
                // as of August 2021, looks like: //ssl.gstatic.com/dictionary/static/sounds/20200429/yellow--_gb_3.mp3
                return [data[0].phonetics[0].audio.substring(2)];
            } else {
                throw new Error(FETCH_ERROR_TYPES.WORD_DOES_NOT_EXIST);
            }
        }).catch(error => {
            console.log(`ERROR IN fetching audio. ACTION: fetchWordData. ATTENTION: ${error}`);
            dispatch({
                type: ERROR_FETCHING_DATA
            });
        })
);

const fetchSocialWordsData = (endpoint = ROOT_PATH, dispatch = DEFAULT.NULL) => (
    toddlerSocialWordsAPI.get(endpoint)
    .then(({ data }) => {
        if (!data || data.length === 0) {
            throw new Error(FETCH_ERROR_TYPES.WORD_DOES_NOT_EXIST);
        }
        return data;
    }).catch(error => {
        console.log(`ERROR IN fetching social data. ACTION: fetchWordData. ATTENTION: ${error}`);
        dispatch({
            type: ERROR_FETCHING_DATA
        });
    })
);

const findEndpointForSocialWordType = (type = DEFAULT.NULL) => {
    switch(type) {
        case SOCIAL_TYPE_SECOND:
            return TODDLER_SOCIAL_WORDS_SECOND_WORDS_ENDPOINT;
        case SOCIAL_TYPE_THIRD:
            return TODDLER_SOCIAL_WORDS_THIRD_WORDS_ENDPOINT;
        default:
            return TODDLER_SOCIAL_WORDS_FIRST_WORDS_ENDPOINT;
    }
}