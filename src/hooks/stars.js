import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { GAME_PATH } from '../const';

export const useShowStars = () => {
    const { pathname } = useLocation();
    const [shouldShowStars, setShouldShowStars] = useState(false);

    useEffect(() => {
        setShouldShowStars(!pathname.includes(GAME_PATH));
    }, [pathname])

    return [shouldShowStars];
};