import { SET_USER_ID } from './types';
import { getKeyExistInLocalStorage } from '../../utils/localStorage';
import { setLocalStorageData } from './localStorage';

import { DEFAULT } from '../../const';

export const setUserId = (userId = DEFAULT.STRING) => (
    async(dispatch) => {
        userId = userId.includes('|') ? userId.split('|').pop() : userId;

        // set user id
        dispatch({
            type: SET_USER_ID,
            payload: userId
        });

        // set userId doesn't exist in localStorage
        if (!getKeyExistInLocalStorage(userId)) {
            dispatch(setLocalStorageData(userId));
        }
    }
);