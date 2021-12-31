import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserId } from '../../redux/actions/auth';
import { getUserIdSelector } from '../../redux/selectors/auth';

export const useAuth = () => {
    const dispatch = useDispatch();

    const { user } = useAuth0();
    const userId = useSelector(getUserIdSelector);

    useEffect(() => {
        if (user && user.sub && !userId) {
            dispatch(setUserId(user.sub));
        }
    }, [dispatch, user, userId]);

    return {
        ...useAuth0(),
        userId
    }
}