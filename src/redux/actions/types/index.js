// auth
export const SET_USER_ID = "auth/setUserId";

// localStorage
export const GET_LOCAL_STORAGE_DATA = "localStorage/getLocalStorageData";
export const SET_LOCAL_STORAGE_DATA = "localStorage/setLocalStorageData";
export const ERROR_FETCHING_LOCAL_STORAGE_DATA = "localStorage/errorFetchingLocalStorageData";
export const ERROR_SETTING_LOCAL_STORAGE_DATA = "localStorage/errorSettingLocalStorageData";

// stars
export const SET_STARS_EARNED = "stars/setStarsEarned";

// words
export const GET_MAIN_WORD_DATA = "words/getMainWordData";
export const GET_SOCIAL_WORD_DATA = "words/getSocialWordData";
export const ERROR_FETCHING_DATA = "words/errorFetchingData";

// errors
export const FETCH_ERROR_TYPES = {
    USER_ID_DOES_NOT_EXIST: "You need a User ID to get/update user data!"
}

// response types
export const RESPONSE_SUCCESS = "SUCCESS";
export const RESPONSE_ERROR = "ERROR";