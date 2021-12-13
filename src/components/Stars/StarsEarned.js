import React from 'react';
import { useSelector } from 'react-redux';
import EmptyStar from './svg/EmptyStar';

import { useShouldShowIfResponseSuccess } from '../../hooks';
import { getStarsEarnedSelector } from '../../redux/selectors/localStorage';

const FullStar = () => EmptyStar(20, true);
const StarsEarned = () => {
    const starsEarned = useSelector(getStarsEarnedSelector);
    const [shouldShow] = useShouldShowIfResponseSuccess();

    return shouldShow && (
        <div className="flex justify-center flex-wrap content-center">
            <div>{FullStar()}</div>
            <div className="mt-3 font-poppins font-bold tracking-wide text-4xl text-blue-300">
                x <span className="underline inline-block align-middle">{starsEarned}</span>
            </div>
        </div>
    );
}

export default StarsEarned;