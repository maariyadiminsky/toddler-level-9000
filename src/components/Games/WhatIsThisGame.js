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
    getCustomCSSForWordsToChooseFrom,
    getCorrectImageURL
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
    SET_CURRENT_WORD_AUDIO,

    ERROR_IN_TYPES,
} from "./types";

import StarsToEarn from "../Stars/StarsToEarn";
import StartGameButton from "../StartGameButton";
import Loader from "../Loader";

const INITIAL_STATE = {
    gameStarted: false,
    roundStarted: false,
    roundsLeft: 5,
    words: [],
    currentWord: "green",
    wordsToChooseFrom: [],
    currentWordAudio: null,
    welcomeAudio: null,
    startAudio: null,
    gameCompleteAudio: null,
};

const reducer = (state, { type, payload}) => {
  switch (type) {
    case START_NEW_GAME: 
        return {
            ...state,
            gameStarted: true,
            roundsLeft: payload
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
            gameCompleteAudio: payload.gameCompleteAudio,
        };
    case SET_CURRENT_WORD_AUDIO:
        return { 
            ...state, 
            currentWordAudio: payload
        };
    default:
      throw new Error(ERROR_IN_TYPES.TYPE_DOES_NOT_EXIST("WhatIsThisGame"));
  }
}

const fetchWordDataOptions = (status) => ({
    isLocalStorageUpdatedWithData: (status === RESPONSE_SUCCESS)
});
const WhatIsThisGame = ({ wordType }) => {
    // ===================================> data fetching

    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        gameStarted,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch] = useReducer(reducer, INITIAL_STATE);

    // fetch data from local storage
    const { status } = useGetLocalStorageData();
    
    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(status));

    const hasWordAudio = useCallback(() => wordData && isArrayExistAndNotEmpty(wordData.audio), [wordData]);

    // ===================================> setup

    const hasWordData = useCallback(() => isObjectExistAndNotEmpty(wordData), [wordData]);
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

    const handleStartNewGame = () => {
        if (!gameStarted) {
            welcomeAudio.play();

            wait(2000)
                .then(() => (
                    dispatch({ 
                        type: START_NEW_GAME,
                        // note: round amount determined by how many words are being tested
                        payload: wordAmountToShowAtOneTime.current
                    })
                ));
        }
    }

    const handleStartNewRound = useCallback(() => {
        if (gameStarted && currentWord && hasWords() && hasWordsToChooseFrom()) {

            dispatch({ 
                type: START_NEW_ROUND 
            })

            wait(500).then(() => shouldPlayStartAudio() && startAudio.play());
        }
    }, [gameStarted, currentWord, hasWords, hasWordsToChooseFrom, startAudio]);

    const handleCompleteRound = (word) => {
        if (currentWordAudio && word === currentWord) {
            currentWordAudio.play();

            wait(1000)
                .then(() => (
                    dispatch({
                        type: COMPLETE_ROUND
                    })
                ));
        }
    }  

    // play the start audio only once at the start of the game;
    const shouldPlayStartAudio = () => roundsLeft === wordAmountToShowAtOneTime.current;

    // ==========> audio 

    useEffect(()=> {
        if (hasWordAudio()) {
            dispatch({
                type: SET_CURRENT_WORD_AUDIO,
                payload: new Audio(getCorrectAudioUrl(wordData.audio[0], wordType))
            })
        }

    }, [wordData?.audio, hasWordAudio])

    useEffect(() => {
        if (!welcomeAudio) {
            dispatch({
                type: SET_AUDIO,
                payload: {
                    welcomeAudio: new Audio(getWelcomeAudio(wordType)),
                    startAudio: new Audio(getStartAudio(wordType)),
                    gameComplete: new Audio(generateGameCompleteAudio(wordType))
                }
            })
        }
    }, [welcomeAudio, wordData?.audio, wordType, hasWordData])
    

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
            handleStartNewRound();
        } else {
            dispatch({
                type: COMPLETE_ALL_ROUNDS
            })
        }
    }, [
        roundStarted, roundsLeft,
        words, currentWord, wordsToChooseFrom, wordData,
        getWordsToPractice, generateWordToPractice, generateWordsToChooseFrom, handleStartNewRound
    ]);

    // ==========>  UI

    const randomImages = useRef([]);

    if ((loading && roundsLeft) || randomImages.length === 0) {
        return <Loader />
    } else if (!gameStarted) {
        return <StartGameButton handleButtonClick={handleStartNewGame}/>
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
                        src={getCorrectImageURL(imageUrl, wordType)} 
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
            <StarsToEarn starsTotal={wordAmountToShowAtOneTime.current} emptyStars={roundsLeft + 1} />
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