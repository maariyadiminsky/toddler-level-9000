import { SET_STARS_EARNED } from './types';
import { setLocalStorageData } from './localStorage';

export const setStarsEarned = (pointsToAdd = 0) => (
    async(dispatch, getState) => {
        const { localStorage: { starsEarned }, auth: { userId } } = getState();

        // add points
        dispatch({
            type: SET_STARS_EARNED,
            payload: starsEarned + pointsToAdd
        });

        // then set updated data in localStorage
        dispatch(setLocalStorageData(userId));
    }
)