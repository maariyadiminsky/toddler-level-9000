import React, { useEffect, useRef, useReducer, useCallback } from "react";
import without from "lodash/without";

import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";
import { 
    getNewWordsArray,
    generateRandomItem,
    generateRandomItems,
    generateRandomNumberBetween,
    getWordAmountToShowAtOneTime
} from "../../utils/words";

import { 
    isArrayExistAndNotEmpty,
    isObjectExistAndNotEmpty 
} from "../../utils/";

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
    currentWord: "green",
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
            words: without(state.words, payload)
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
            wordsToChooseFrom: []
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

    const hasWords = useCallback(() => isArrayExistAndNotEmpty(words), [words]);
    const hasWordsToChooseFrom = useCallback(() => isArrayExistAndNotEmpty(wordsToChooseFrom), [wordsToChooseFrom]);

    const getWordsToPractice = useCallback(() => {
        // set words child will practice
        if (!hasWords()) {
            dispatch({ 
                type: SET_WORDS,
                payload: getNewWordsArray(wordType)
            })
        }
    }, [hasWords, wordType]);

    const generateWordToPractice = useCallback(() => {
        // generate a random word child will need to choose correctly
        if (hasWords() && !currentWord) {
            dispatch({
                type: SET_CURRENT_WORD,
                payload: generateRandomItem(words, true)
            })
        }
    }, [currentWord, words, hasWords]);

    const wordAmountToShowAtOneTime = useRef(getWordAmountToShowAtOneTime(wordType));
    const isWordsToChooseFromGenerated = useRef(false);
    const generateWordsToChooseFrom = useCallback(() => {
        // to avoid re-renders in a utils method
        if (isWordsToChooseFromGenerated.current) return;

        // give child words to choose from
        // the correct word is within them
        if (!hasWordsToChooseFrom() && hasWords() && currentWord) {
            isWordsToChooseFromGenerated.current = true;

            const randomWordsToChooseFrom = generateRandomItems(words, wordAmountToShowAtOneTime.current, currentWord);

            dispatch({
                type: SET_WORDS_TO_CHOOSE_FROM,
                payload: randomWordsToChooseFrom
            });

            if (randomWordsToChooseFrom.length !== 0) {
                isWordsToChooseFromGenerated.current = false;
            }
        }
    }, [currentWord, words, hasWordsToChooseFrom, hasWords]);

    // ===================================> handlers

    const hasCompletedRound = useCallback(() => {
        if (currentWord && hasWords() && hasWordsToChooseFrom()) {
            dispatch({ 
                type: START_NEW_ROUND 
            })
        }
    }, [currentWord, hasWords, hasWordsToChooseFrom]);

    const handleCompleteRound = () =>(
        dispatch({
            type: COMPLETE_ROUND
        })
    );    

    // if rounds left
    useEffect(() => {
        if (roundStarted) return;

        if (roundsLeft) {
            // console.log("in useeffect", words, currentWord, wordsToChooseFrom, roundsLeft);
            // initial setup
            getWordsToPractice();
            generateWordToPractice();
            generateWordsToChooseFrom();

            // start round
            hasCompletedRound();
        } else {
            dispatch({
                type: COMPLETE_ALL_ROUNDS
            })
        }
    }, [
        roundStarted, roundsLeft,
        words, currentWord, wordsToChooseFrom, wordData,
        getWordsToPractice, generateWordToPractice, generateWordsToChooseFrom, hasCompletedRound
    ]);

    // ===================================> UI
    const randomImages = useRef([]);
    
    if (loading && roundsLeft || randomImages.length === 0) {
        return (
            <div>Loading...</div>
        );
    } else if (errors) {
        return (
            <div>{errors}</div>
        );
    }
    console.log("yds", !isObjectExistAndNotEmpty(wordData), wordData && !isArrayExistAndNotEmpty(wordData.images));

    const renderWrapper = () => {
        if (!isObjectExistAndNotEmpty(wordData) || !isArrayExistAndNotEmpty(wordData.images)) return;

        // generates 3 - 5 random images out of the 10 returned from the API
        randomImages.current = generateRandomItems(wordData.images, 3);

        if (randomImages.current.length === 0) return;

        return (
            <div className={`container px-36`}>
                <div className={`cursor-pointer grid grid-cols-3 gap-y-5 gap-x-10`}>
                    {renderImageItems(randomImages.current)}
                </div>
            </div>
        );
    }

    const renderImageItems = (images) => (
        images.map(({ id, altText, imageUrl }) => (
            <div key={id}>
                <div 
                    className={"bg-white rounded-2xl shadow-lg hover:animate-ping hover:shadow-2xl hover:rotate-45 hover:scale-75 transform transition duration-300"}
                >
                    <img
                        key={id}
                        className="min-w-full rounded-2xl"
                        src={imageUrl} 
                        alt={altText}
                    />
                </div>
            </div>
        ))
    );

    const renderChoiceItems = () => {
        // words && word.length !== 0
    }

    return (
        <div>
            {renderWrapper()}
        </div>
    );
}

export default WhatIsThisGame;