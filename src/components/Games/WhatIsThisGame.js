import React, { useEffect, useReducer } from "react";
import omit from "lodash/omit";

import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";
import { 
    getNewWordsArray,
    getRandomWord 
} from "../../utils/words";

import {
    SET_WORDS,
    SET_CURRENT_WORD,
    COMPLETE_ROUND,
    START_NEW_ROUND,
    COMPLETE_ALL_ROUNDS,

    ERROR_IN_TYPES,
} from "./types";

const INITIAL_STATE = {
    roundStarted: false,
    roundsLeft: 5, // for 5 words
    words: [],
    currentWord: ""
};

const reducer = (state, { type, payload}) => {
  switch (type) {
    case SET_WORDS:
        return { 
            ...state, 
            words: [...payload] 
        }
    case SET_CURRENT_WORD:
        return { 
            ...state,
            currentWord: payload,
            words: omit(state.words, state.currentWord)
        }
    case START_NEW_ROUND:
        return { 
            ...state, 
            roundStarted: true,
            roundsLeft: state.roundsLeft - 1, 
        }
    case COMPLETE_ROUND: {
        return { 
            ...state, 
            roundStarted: false,
            currentWord: ""
        }
    }
    default:
      throw new Error(ERROR_IN_TYPES.TYPE_DOES_NOT_EXIST("WhatIsThisGame"));
  }
}

const fetchWordDataOptions = (localStorageResponse) => ({
    isLocalStorageUpdatedWithData: (localStorageResponse.status === RESPONSE_SUCCESS)
});
const WhatIsThisGame = ({ wordType }) => {
    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ roundsLeft, roundStarted, words, currentWord }, dispatch] = useReducer(reducer, INITIAL_STATE);

    // fetch data from local storage
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(LocalStorageDataUpdatedResponse));

    const handleCompleteRound = () =>(
        dispatch({
            type: COMPLETE_ROUND
        })
    );

    // if rounds left
    useEffect(() => {
        if (roundStarted) return;

        if (roundsLeft) {
            if (!words || words.length === 0) {
                dispatch({ 
                    type: SET_WORDS,
                    payload: getNewWordsArray(wordType)
                })
            } else if (!currentWord && words && words.length !== 0) {
                dispatch({
                    type: SET_CURRENT_WORD,
                    payload: getRandomWord(words)
                })
            } if (currentWord && wordData) {
                dispatch({ 
                    type: START_NEW_ROUND 
                })
            }
        } else {
            dispatch({
                type: COMPLETE_ALL_ROUNDS
            })
        }
    }, [
        roundStarted, roundsLeft,
        words, wordType, wordData, currentWord
    ]);

    // show this if there is no word data
    // do not show this if there are no more rounds
    if (loading && roundsLeft) {
        return (
            <div>Loading...</div>
        );
    } else if (errors) {
        return (
            <div>{errors}</div>
        );
    }

    return (
        <div>
            hi
        </div>
    )
}

export default WhatIsThisGame;