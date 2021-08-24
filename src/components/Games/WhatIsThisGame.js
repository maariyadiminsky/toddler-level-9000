import React, { useEffect, useReducer, useCallback } from "react";
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
    SET_WORDS_TO_CHOOSE_FROM,

    ERROR_IN_TYPES,
} from "./types";

const INITIAL_STATE = {
    roundStarted: false,
    roundsLeft: 5, // for 5 words
    words: [],
    currentWord: "",
    wordsToChooseFrom: [],
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
            currentWord: "",
            wordsToChooseFrom: null
        }
    }
    case SET_WORDS_TO_CHOOSE_FROM: {
        return {
            ...state,
            wordsToChooseFrom: [...payload]
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
    // ===================================> data fetching

    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom 
    }, dispatch] = useReducer(reducer, INITIAL_STATE);

    // fetch data from local storage
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(LocalStorageDataUpdatedResponse));

    // ===================================> setup

    const getWordsToPractice = useCallback(() => {
        // set words child will practice
        if (!words || words.length === 0) {
            dispatch({ 
                type: SET_WORDS,
                payload: getNewWordsArray(wordType)
            })
        }
    }, [words, wordType]);

    const generateWordToPractice = useCallback(() => {
        // generate a random word child will need to choose correctly
        if (words && words.length !== 0) {
            dispatch({
                type: SET_CURRENT_WORD,
                payload: getRandomWord(words)
            })
        }
    }, [words]);

    const generateWordsToChooseFrom = useCallback(() => {
        // give child words to choose from
        // the correct word is within them
        if (currentWord) {

        }
    }, [currentWord]);

    // if rounds left
    useEffect(() => {
        if (roundStarted) return;

        if (roundsLeft) {
            // initial setup
            if (!words) getWordsToPractice();
            if (!currentWord) generateWordToPractice()
            if (!wordsToChooseFrom) generateWordsToChooseFrom();

            // start round
            if (currentWord && wordsToChooseFrom && wordData) {
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
        words, currentWord, wordsToChooseFrom, wordData,
        getWordsToPractice, generateWordToPractice, generateWordsToChooseFrom
    ]);

    // ===================================> handlers

    const handleCompleteRound = () =>(
        dispatch({
            type: COMPLETE_ROUND
        })
    );

    // ===================================> UI

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