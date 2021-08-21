import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { 
    getLocalStorageData, 
    setLocalStorageData 
} from "../redux/actions/localStorage";

export const useGetLocalStorageReduxState = (userId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocalStorageData(userId))
    }, [dispatch, userId]);
}

export const useSetLocalStorageReduxState = (userId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLocalStorageData(userId))
    }, [dispatch, userId]);
}