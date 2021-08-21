import { 
    unsplashAPI, 
    dictionaryAPI, 
    toddlerSocialWordsApi 
} from "../../api";
import { 
    UNSPLASH_SEARCH_PHOTOS_ENDPOINT,
    DICTIONARY_WORD_ENDPOINT
} from "../../api/const";
import { 
    GET_WORD_DATA,
    GET_WORD_INITIAL_DATA,
    ERROR_FETCHING_DATA
} from "./types";

const fetchWordDataUnsplashParamOptions = {
    "per_page": 5, // number of items returned
    "content_filter": "high", // make sure results are child-appropriate,
    "orientation": "squarish" // all images come back with same orientation
}
export const fetchWordData = (wordType, word) => (
    async(dispatch) => {
        // sets initial data when a word is requested for the first time
        dispatch({
            type: GET_WORD_INITIAL_DATA
        })

        // first fetch image data
        const imageData = await unsplashAPI.get(UNSPLASH_SEARCH_PHOTOS_ENDPOINT, {
            params: {
                "query": word,
                ...fetchWordDataUnsplashParamOptions
            }
        }).then(({ data: { results }}) => 
            results.map(item => ({
                altDescription: item.alt_description,
                sizeUrls: item.urls,
                credits: {
                    name: item.user.name,
                    profileLink: item.user.links.html,
                    imageLink: item.links.html
                }
            }))
        ).catch(error => {
            console.log(`ERROR IN fetching images within ACTION: fetchWordData. ATTENTION: ${error}`);
            dispatch({
                type: ERROR_FETCHING_DATA
            });
        });

        // second fetch audio data
        const audioData = await dictionaryAPI.get(DICTIONARY_WORD_ENDPOINT(word))
            .then(({ data }) => {
                if (data && data[0].phonetics && data[0].phonetics.length > 0) {
                    // this url changes sometimes since it comes from a developer offering API for free 
                    // as of August 2021, looks like: //ssl.gstatic.com/dictionary/static/sounds/20200429/yellow--_gb_3.mp3
                    return data[0].phonetics[0].audio.substring(2);
                } else {
                    return [];
                }
            }).catch(error => {
                console.log(`ERROR IN fetching audio within ACTION: fetchWordData. ATTENTION: ${error}`);
                dispatch({
                    type: ERROR_FETCHING_DATA
                });
            });

        // set the data in redux
        dispatch({
            type: GET_WORD_DATA,
            payload: { 
                wordType,
                word,
                imageData,
                audioData
            }
        })
    }
);