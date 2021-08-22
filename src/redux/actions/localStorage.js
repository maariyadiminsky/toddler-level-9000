import {
    GET_LOCAL_STORAGE_DATA,
    SET_LOCAL_STORAGE_DATA,
    ERROR_FETCHING_LOCAL_STORAGE_DATA,

    FETCH_ERROR_TYPES
} from "./types";

// note: localStorage check exists to makes sure browser 
// has a localStorage / user not using incognito mode
export const getLocalStorageData = (userId) => {
    if (window.localStorage) {
        return async(dispatch) => {
            let data;
            
            try {
                if (userId) {
                    const localStorageReduxStateForUser = window.localStorage.getItem(userId);
                    data = localStorageReduxStateForUser ? JSON.parse(localStorageReduxStateForUser) : {};
        
                    dispatch({
                        type: GET_LOCAL_STORAGE_DATA,
                        payload: data
                    });
                } else {
                    throw new Error(FETCH_ERROR_TYPES.USER_ID_DOES_NOT_EXIST);
                }
            } catch(error) {
                dispatch({
                    type: ERROR_FETCHING_LOCAL_STORAGE_DATA
                });
            }

            return data;
        }
    } else showLocalStorageMissingErrorInBrowser();
}

export const setLocalStorageData = (userId) => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            const { localStorage } = getState();

            try {
                if (userId) {
                    window.localStorage.setItem(userId, JSON.stringify(localStorage));
    
                    dispatch({
                        type: SET_LOCAL_STORAGE_DATA
                    });
                } else {
                    throw new Error(FETCH_ERROR_TYPES.USER_ID_DOES_NOT_EXIST);
                }
            } catch(error) {
                dispatch({
                    type: ERROR_FETCHING_LOCAL_STORAGE_DATA
                });
            }
        }
    } else showLocalStorageMissingErrorInBrowser();
}

const showLocalStorageMissingErrorInBrowser = () => {
    console.log("ERROR! You need to use a browser that has localStorage or exit Incognito Mode to play. Thanks!");
}