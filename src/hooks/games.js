import { useReducer } from 'react';
import without from 'lodash/without';

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
} from '../types';

const INITIAL_STATE = {
    gameStarted: false,
    gameEnded: false,
    roundStarted: false,
    roundsLeft: 5,
    words: [],
    currentWord: '',
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
            gameEnded: false,
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
            currentWord: '',
            wordsToChooseFrom: []
        }
    }
    case COMPLETE_ALL_ROUNDS: {
        return { 
            ...state, 
            ...INITIAL_STATE,
            gameEnded: true
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
      throw new Error(ERROR_IN_TYPES.TYPE_DOES_NOT_EXIST('WhatIsThisGame'));
  }
}

export const useWhatIsThisGameReducer = () => {
    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        gameStarted, gameEnded,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch] = useReducer(reducer, INITIAL_STATE);

    return [{ 
        gameStarted, gameEnded,
        roundsLeft, roundStarted, 
        words, currentWord, wordsToChooseFrom,
        currentWordAudio, welcomeAudio, startAudio, gameCompleteAudio
    }, dispatch];
}