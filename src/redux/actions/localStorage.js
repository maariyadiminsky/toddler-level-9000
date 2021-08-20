import {
    GET_LOCAL_STORAGE_REDUX_STATE,
    SET_LOCAL_STORAGE_REDUX_STATE
} from "./types";

// note: localStorage check exists to makes sure browser 
// has a localStorage / user not using incognito mode
export const getLocalStorageStateAndSetInRedux = (userId) => {
    if (window.localStorage) {
        const localStorageReduxStateForUser = window.localStorage.getItem(userId);

        return ({
            type: GET_LOCAL_STORAGE_REDUX_STATE,
            payload: localStorageReduxStateForUser ? JSON.parse(window.localStorage.getItem(userId)) : {}
        });
    } else showLocalStorageMissingErrorInBrowser();
}

export const setLocalStorageStateAndSetInRedux = (userId) => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            console.log("in set localstorage", JSON.stringify(getState()));
            window.localStorage.setItem(userId, JSON.stringify(getState()));
    
            dispatch({
                type: SET_LOCAL_STORAGE_REDUX_STATE
            });
        }
    } else showLocalStorageMissingErrorInBrowser();
}

const showLocalStorageMissingErrorInBrowser = () =>
    console.log("ERROR! You need to use a browser that has localStorage or exit Incognito Mode to play. Thanks!")