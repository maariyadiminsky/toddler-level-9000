import {
    GET_LOCAL_STORAGE_DATA,
    SET_LOCAL_STORAGE_DATA
} from "./types";

// note: localStorage check exists to makes sure browser 
// has a localStorage / user not using incognito mode
export const getLocalStorageData = () => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            const { auth } = getState();
            const localStorageReduxStateForUser = window.localStorage.getItem(auth.currentUserId);
            const data = localStorageReduxStateForUser ? JSON.parse(localStorageReduxStateForUser) : {};

            dispatch({
                type: GET_LOCAL_STORAGE_DATA,
                payload: data
            });

            return data;
        }
    } else showLocalStorageMissingErrorInBrowser();
}

export const setLocalStorageData = () => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            const { localStorage } = getState();
            window.localStorage.setItem(getState().auth.currentUserId, JSON.stringify(localStorage));
    
            dispatch({
                type: SET_LOCAL_STORAGE_DATA
            });
        }
    } else showLocalStorageMissingErrorInBrowser();
}

const showLocalStorageMissingErrorInBrowser = () =>
    console.log("ERROR! You need to use a browser that has localStorage or exit Incognito Mode to play. Thanks!")