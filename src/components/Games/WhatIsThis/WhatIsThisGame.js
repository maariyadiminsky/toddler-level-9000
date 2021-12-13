import React, { useEffect, useRef, useCallback } from 'react';

import { useAudio } from '../../../hooks/audio';
import { useWhatIsThisGameReducer } from '../../../hooks/games';
import { useGetLocalStorageData } from '../../../hooks/localStorage';
import { useFetchWordData } from '../../../hooks/words';
import { RESPONSE_SUCCESS } from '../../../redux/actions/types';
import { 
    getNewWordsArray,
    generateRandomItem,
    generateRandomItems,
    getWordAmountToShowAtOneTime,
} from '../../../utils/words';
import { isArrayExistAndNotEmpty, wait } from '../../../utils';
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
} from '../types';

import RandomImageGenerator from '../../Images/RandomImageGenerator';
import ChoiceItems from '../ChoiceItems/ChoiceItems';
import StarsToEarn from '../../Stars/StarsToEarn';
import StartGameButton from '../../StartGameButton/StartGameButton';
import GameCompleteModal from '../../GameCompleteModal/GameCompleteModal';
import Loader from '../../Loader/Loader';

const fetchWordDataOptions = (status) => ({
    isLocalStorageUpdatedWithData: (status === RESPONSE_SUCCESS)
});
const WhatIsThisGame = ({ wordType }) => {
    // ===================================> data fetching

    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        gameStarted, gameEnded,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch] = useWhatIsThisGameReducer();

    // fetch data from local storage
    const { status } = useGetLocalStorageData();

    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(status));

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
        hasWordsToChooseFrom
    ]);

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

    // ==========> audio 

    useAudio(hasWordAudio(), wordData?.audio, wordType, SET_CURRENT_WORD_AUDIO, dispatch);
    useAudio(!welcomeAudio, wordData?.audio, wordType, SET_AUDIO, dispatch);

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

    if (gameEnded) {
        return (
            <GameCompleteModal 
                starsEarned={wordAmountToShowAtOneTime.current} 
                gameCompleteAudio={gameCompleteAudio}
            />
        );
    } else if ((loading && roundsLeft) || randomImages.length === 0) {
        return <Loader />
    } else if (!gameStarted) {
        return <StartGameButton handleButtonClick={handleStartNewGame}/>
    } else if (errors) {
        return <div>{errors}</div>;
    }

    return (
        <div>
            <StarsToEarn starsTotal={wordAmountToShowAtOneTime.current} emptyStars={roundsLeft + 1} />
                <RandomImageGenerator 
                    data={wordData} 
                    randomImagesRef={randomImages} 
                    wordType={wordType} 
                />
            <div className="container">
                <ChoiceItems 
                    data={wordData}
                    type={wordType}
                    wordsToChooseFrom={wordsToChooseFrom}
                    amountToShowAtOneTimeRef={wordAmountToShowAtOneTime}
                    handleCompleteRoundCallback={handleCompleteRound}
                />
            </div>
        </div>
    );
}

export default WhatIsThisGame;