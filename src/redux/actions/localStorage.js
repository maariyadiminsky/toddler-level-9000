import {
    GET_LOCAL_STORAGE_REDUX_STATE,
    SET_LOCAL_STORAGE_REDUX_STATE
} from "../types";


export const getLocalStorageStateAndSetInRedux = (userId) => ({
    type: GET_LOCAL_STORAGE_REDUX_STATE,
    payload: window.localStorage.getItem(userId)
});

export const setLocalStorageStateAndSetInRedux = (userId) => (
    async(dispatch, getState) => {
        dispatch({
            type: SET_LOCAL_STORAGE_REDUX_STATE,
            payload: getState()
        })
    };
);