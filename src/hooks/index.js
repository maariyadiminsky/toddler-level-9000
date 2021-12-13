import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useShouldShowOnPathsExcept = (pathToExclude) => {
    const { pathname } = useLocation();
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        setShouldShow(!pathname.includes(pathToExclude));
    }, [pathname, pathToExclude])

    return [shouldShow];
};