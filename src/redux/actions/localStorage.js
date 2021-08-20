import {
    GET_LOCAL_STORAGE_REDUX_STATE,
    SET_LOCAL_STORAGE_REDUX_STATE
} from "./types";

// note: localStorage check exists to makes sure browser 
// has a localStorage / user not using incognito mode
export const getLocalStorageStateAndSetInRedux = () => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            const localStorageReduxStateForUser = window.localStorage.getItem(getState().auth.currentUserId);

            dispatch({
                type: GET_LOCAL_STORAGE_REDUX_STATE,
                payload: localStorageReduxStateForUser ? JSON.parse(localStorageReduxStateForUser) : {}
            });
        }
    } else showLocalStorageMissingErrorInBrowser();
}

export const setLocalStorageStateAndSetInRedux = () => {
    if (window.localStorage) {
        return async(dispatch, getState) => {
            window.localStorage.setItem(getState().auth.currentUserId, JSON.stringify(getState()));
    
            dispatch({
                type: SET_LOCAL_STORAGE_REDUX_STATE
            });
        }
    } else showLocalStorageMissingErrorInBrowser();
}

const showLocalStorageMissingErrorInBrowser = () =>
    console.log("ERROR! You need to use a browser that has localStorage or exit Incognito Mode to play. Thanks!")