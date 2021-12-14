import { useEffect, useReducer, useRef, useCallback } from 'react';

import { DEFAULT } from '../../../const';
import { isArrayExistAndNotEmpty, wait } from '../../../utils';
import { 
    getNewWordsArray,
    generateRandomItem,
    generateRandomItems,
} from '../../../utils/words';

import reducer, { INITIAL_STATE } from './reducer';

import {
    START_NEW_GAME,
    START_NEW_ROUND,
    COMPLETE_ALL_ROUNDS,
    COMPLETE_ROUND,

    SET_WORDS,
    SET_CURRENT_WORD,
    SET_WORDS_TO_CHOOSE_FROM,
} from '../../../components/Games/types';

export const useWhatIsThisGameReducer = (wordType = DEFAULT.STRING, wordAmountToShowAtOneTime = DEFAULT.NULL) => {
    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        gameStarted, gameEnded,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch] = useReducer(reducer, INITIAL_STATE);

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
    }, [currentWord, words, hasWordsToChooseFrom, hasWords, wordAmountToShowAtOneTime]);

    const generateWordToPractice = useCallback(() => {
        // generate a random word child will need to choose correctly
        if (hasWords() && !currentWord) {
            dispatch({
                type: SET_CURRENT_WORD,
                payload: generateRandomItem(words, true)
            })
        }
    }, [currentWord, words, hasWords]);

    const handleStartNewRound = useCallback(() => {
        if (gameStarted && currentWord && hasWords() && hasWordsToChooseFrom()) {
            // play the start audio only once at the start of the game;
            const shouldPlayStartAudio = () => roundsLeft === wordAmountToShowAtOneTime.current;

            dispatch({ 
                type: START_NEW_ROUND 
            })

            wait(500).then(() => shouldPlayStartAudio() && startAudio.play());
        }
    }, [
        gameStarted, hasWords,
        currentWord, roundsLeft, startAudio,
        hasWordsToChooseFrom, wordAmountToShowAtOneTime
    ]);


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

    const handleCompleteRound = (word = DEFAULT.STRING) => {
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
        words, currentWord, wordsToChooseFrom,
        getWordsToPractice, generateWordToPractice, generateWordsToChooseFrom, handleStartNewRound
    ]);

    return [{ 
        gameStarted, gameEnded,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio,
    }, dispatch, handleStartNewGame, handleCompleteRound];
}