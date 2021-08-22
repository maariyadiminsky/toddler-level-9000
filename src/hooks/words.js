import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { fetchWordData } from "../redux/actions/words";
import { getUserIdSelector } from "../redux/selectors/auth";
import { getWordTypeDataSelector } from "../redux/selectors/localStorage";
import { SOCIAL_TYPE_FIRST } from "../const";

export const useFetchWordData = (
    wordType, 
    word, 
    options = { 
        isLocalStorageUpdatedWithData: false,
        socialType: SOCIAL_TYPE_FIRST
    }
) => {
    const [state, setState] = useState({ 
        loading: true,
        errors: "" 
    });

    const dispatch = useDispatch();

    const userId = useSelector(getUserIdSelector);
    const wordData = useSelector((state) => getWordTypeDataSelector(state, wordType, word));
    
    const shouldFetchWordData = useCallback(() => 
        options.isLocalStorageUpdatedWithData && userId && (!wordData || isEmpty(wordData))
    ,[options.isLocalStorageUpdatedWithData, userId, wordData]);

    useEffect(() => {
        setState(({ loading: true, errors: "" }));

        // if word type doesn't exist in localStorage then fetch it
        if (shouldFetchWordData()) {
            dispatch(fetchWordData(wordType, word, options))
                .then(() => {
                    setState(({ 
                        loading: 
                        false, errors: ""  
                    }));
                }).catch((error) => {
                    console.log(`ERROR FETCHING WORD DATA: ${error}`);
                    setState(({ 
                        loading: false, 
                        errors: `${error}` 
                    }));
                });
        }
    }, 
    [
        dispatch, 
        shouldFetchWordData,
        userId,
        word,
        wordType,
    ]);

    return {
        ...state,
        wordData
    };
};