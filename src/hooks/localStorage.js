import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
    getLocalStorageData, 
    setLocalStorageData 
} from "../redux/actions/localStorage";
import { getUserIdSelector } from "../redux/selectors/auth";

export const useGetLocalStorageData = () => {
    const dispatch = useDispatch();
    const userId = useSelector(getUserIdSelector);

    useEffect(() => {
        if (userId) {
            dispatch(getLocalStorageData(userId))
        }
    }, [dispatch, userId]);
}

export const useSetLocalStorageData = () => {
    const dispatch = useDispatch();
    const userId = useSelector(getUserIdSelector);

    useEffect(() => {
        if (userId) {
            dispatch(setLocalStorageData(userId))
        }
    }, [dispatch, userId]);
}