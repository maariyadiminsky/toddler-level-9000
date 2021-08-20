import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { 
    getLocalStorageStateAndSetInRedux, 
    setLocalStorageStateAndSetInRedux 
} from "../redux/actions/localStorage";

export const useGetLocalStorageReduxState = (userId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocalStorageStateAndSetInRedux(userId))
    }, [dispatch, userId]);
}

export const useSetLocalStorageReduxState = (userId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLocalStorageStateAndSetInRedux(userId))
    }, [dispatch, userId]);
}