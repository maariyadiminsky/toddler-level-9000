import React, { useEffect, useRef, useReducer, useCallback } from "react";
import without from "lodash/without";

import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";
import { 
    getNewWordsArray,
    generateRandomItem,
    generateRandomItems,
    getWordAmountToShowAtOneTime,
    getCustomCSSForWordsToChooseFrom
} from "../../utils/words";
import { 
    getCorrectAudioUrl,
    getWelcomeAudio,
    getStartAudio,
    generateGameCompleteAudio
} from "../../utils/audio";
import { 
    isArrayExistAndNotEmpty,
    isObjectExistAndNotEmpty,
    wait
} from "../../utils/";
import {
    START_NEW_GAME,
    START_NEW_ROUND,
    COMPLETE_ROUND,
    COMPLETE_ALL_ROUNDS,

    SET_WORDS,
    SET_CURRENT_WORD,
    SET_WORDS_TO_CHOOSE_FROM,

    SET_AUDIO,

    ERROR_IN_TYPES,
} from "./types";

import Loader from "../Loader";

const INITIAL_STATE = {
    gameStarted: false,
    roundStarted: false,
    roundsLeft: 5, // for 5 words
    words: [],
    currentWord: "green",
    wordsToChooseFrom: [],
    welcomeAudio: null,
    startAudio: null,
    gameCompleteAudio: null,
};

const reducer = (state, { type, payload}) => {
  switch (type) {
    case START_NEW_GAME: 
        return {
            ...state,
            gameStarted: true
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
    case COMPLETE_ALL_ROUNDS: {
        return { 
            ...state, 
            ...INITIAL_STATE
        }
    }
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
    case SET_WORDS_TO_CHOOSE_FROM: {
        return {
            ...state,
            wordsToChooseFrom: [...payload]
        }
    }
    case SET_AUDIO:
        return { 
            ...state, 
            welcomeAudio: payload.welcomeAudio,
            startAudio: payload.startAudio,
            gameCompleteAudio: payload.gameCompleteAudio
        };
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
        gameStarted,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch] = useReducer(reducer, INITIAL_STATE);

    // fetch data from local storage
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(LocalStorageDataUpdatedResponse));

    const hasWordAudio = useCallback(() => wordData && isArrayExistAndNotEmpty(wordData.audio), [wordData]);

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

    const startNewGame = () => {
        dispatch({ 
            type: START_NEW_GAME
        })
    }

    const startNewRound = useCallback(() => {
        if (currentWord && hasWords() && hasWordsToChooseFrom()) {
            wordAudio.current = "";

            dispatch({ 
                type: START_NEW_ROUND 
            })
        }
    }, [currentWord, hasWords, hasWordsToChooseFrom, startAudio, welcomeAudio]);

    const handleCompleteRound = (word) => {
        if (word === currentWord && wordAudio.current !== "") {
            wordAudio.current.play();
        }

        // dispatch({
        //     type: COMPLETE_ROUND
        // })
    }  

    // ==========> audio 

    const wordAudio = useRef("");
    useEffect(()=> {
        if (hasWordAudio() && wordAudio.current === "") {
            wordAudio.current = new Audio(getCorrectAudioUrl(wordData.audio[0]));
        }

    }, [wordData?.audio, hasWordAudio])

    useEffect(() => {
        if (!welcomeAudio) {
            console.log("audio!!", getWelcomeAudio(wordType));
            const t = new Audio(getWelcomeAudio(wordType));
            dispatch({
                type: SET_AUDIO,
                payload: {
                    welcomeAudio: new Audio(getWelcomeAudio(wordType)),
                    startAudio: new Audio(getStartAudio(wordType)),
                    gameComplete: new Audio(generateGameCompleteAudio(wordType))
                }
            })
        }
    }, [welcomeAudio, wordType])
    

    // ==========> words
    
    // if rounds left
    useEffect(() => {
        if (roundStarted) return;

        if (roundsLeft) {
            // initial setup
            getWordsToPractice();
            generateWordToPractice();
            generateWordsToChooseFrom();

            // start round
            startNewRound();
        } else {
            dispatch({
                type: COMPLETE_ALL_ROUNDS
            })
        }
    }, [
        roundStarted, roundsLeft,
        words, currentWord, wordsToChooseFrom, wordData,
        getWordsToPractice, generateWordToPractice, generateWordsToChooseFrom, startNewRound
    ]);

    // ==========>  UI

    const randomImages = useRef([]);
    
    const loadForce = true;
    if (loadForce || (loading && roundsLeft) || randomImages.length === 0) {
        return <Loader />

        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="bg-pink-500 rounded-full motion-reduce:animate-bounce w-6 h-6"></div>
                <div className="w-6 h-6 bg-green-300 rounded-full "></div>
                <div className="w-6 h-6 bg-indigo-300 rounded-full animate-bounce"></div>
            </div>
        );
    } else if (errors) {
        return (
            <div>{errors}</div>
        );
    }

    const renderImagesWrapper = () => {
        if (!isObjectExistAndNotEmpty(wordData) || !isArrayExistAndNotEmpty(wordData.images)) return;

        // generates 3 - 5 random images out of the 10 returned from the API
        randomImages.current = generateRandomItems(wordData.images, 3);

        if (randomImages.current.length === 0) return;

        return (
            <div className="container px-36">
                <div className="cursor-pointer grid grid-cols-3 gap-y-5 gap-x-10">
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

    const renderChoiceItems = () => (
        isObjectExistAndNotEmpty(wordData) && isArrayExistAndNotEmpty(wordsToChooseFrom) && wordsToChooseFrom.map(item => (
            <div key={item} onClick={() => handleCompleteRound(item)} className={`m-auto flex justify-center items-center content-center h-36 w-36 rounded-full fill-current bg-gradient-to-br ${getCustomCSSForWordsToChooseFrom(wordType, item)} shadow-lg hover:shadow-2xl`}>
                {item}
            </div>
        ))
    );

    return (
        <div>
            {renderImagesWrapper()}
            <div className="container">
                <div className={`mt-16 mx-72 cursor-pointer grid grid-cols-${wordAmountToShowAtOneTime.current} gap-x-10`}>
                    {renderChoiceItems()}
                </div>
            </div>
        </div>
    );
}

export default WhatIsThisGame;