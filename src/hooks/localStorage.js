import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./auth";

import { 
    getLocalStorageData, 
    setLocalStorageData 
} from "../redux/actions/localStorage";

export const useGetLocalStorageData = () => {
    const [response, setResponse] = useState({});

    const dispatch = useDispatch();

    const { userId } = useAuth();

    useEffect(() => {
        if (userId) {
            dispatch(getLocalStorageData(userId))
                .then(response => {
                    setResponse(response);
                })
        }
    }, [dispatch, userId]);

    return response;
}

export const useSetLocalStorageData = () => {
    const dispatch = useDispatch();

    const { userId } = useAuth();

    useEffect(() => {
        if (userId) {
            dispatch(setLocalStorageData(userId))
        }
    }, [dispatch, userId]);
}