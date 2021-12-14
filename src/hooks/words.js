import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { fetchWordData } from '../redux/actions/words';
import { getUserIdSelector } from '../redux/selectors/auth';
import { getWordTypeDataSelector } from '../redux/selectors/localStorage';
import { DEFAULT, SOCIAL_TYPE_FIRST } from '../const';

export const useFetchWordData = (
    wordType, 
    word, 
    options = { 
        isLocalStorageUpdatedWithData: false,
        socialType: SOCIAL_TYPE_FIRST
    }
) => {
    const [state, setState] = useState({ loading: DEFAULT.BOOL_TRUE, errors: DEFAULT.STRING  });

    const dispatch = useDispatch();

    const userId = useSelector(getUserIdSelector);
    const wordData = useSelector((state) => getWordTypeDataSelector(state, wordType, word));
    
    const shouldFetchWordData = useCallback(() => 
        options.isLocalStorageUpdatedWithData && userId && (!wordData || isEmpty(wordData))
    ,[options.isLocalStorageUpdatedWithData, userId, wordData]);
    
    const stopLoading = useCallback((errors = DEFAULT.STRING) => {
        setState(({ loading: DEFAULT.BOOL_FALSE, errors: errors }));
    }, [state.loading]);

    useEffect(() => {
        setState(({ loading: DEFAULT.BOOL_TRUE, errors: DEFAULT.STRING }));

        // if word type doesn't exist in localStorage then fetch it
        if (shouldFetchWordData()) {
            dispatch(fetchWordData(wordType, word, options))
                .then(() => stopLoading())
                .catch((error) => {
                    console.log(`ERROR FETCHING WORD DATA: ${error}`);
                    stopLoading(error);
                });
        } else stopLoading();
    },[
        dispatch, 
        shouldFetchWordData,
        userId,
        word,
        wordType,
        stopLoading
    ]);

    return {
        ...state,
        wordData
    };
};