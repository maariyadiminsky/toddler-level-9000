import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { DEFAULT } from '../const';
import { useGetLocalStorageData } from './localStorage';

import { RESPONSE_SUCCESS } from '../redux/actions/types';

export const useShouldShowOnPathsExcept = (pathToExclude = DEFAULT.STRING) => {
    const { pathname } = useLocation();
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(!pathname.includes(pathToExclude));
    }, [pathname, pathToExclude])

    return [shouldShow];
};

export const useShouldShowIfResponseSuccess = () => {
    const { status } = useGetLocalStorageData();
    
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(status === RESPONSE_SUCCESS);
    }, [status])

    return [shouldShow];
}