import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptyStar from './svg/EmptyStar';

import { useGetLocalStorageData } from '../../hooks/localStorage';
import { getStarsEarnedSelector } from '../../redux/selectors/localStorage';
import { RESPONSE_SUCCESS } from '../../redux/actions/types';

const FullStar = () => EmptyStar(20, true);
const StarsEarned = () => {
    // fetch data from local storage
    const { status } = useGetLocalStorageData();

    const starsEarned = useSelector(getStarsEarnedSelector);
    
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(status === RESPONSE_SUCCESS);
    }, [status])

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