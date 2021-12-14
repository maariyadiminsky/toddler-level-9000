import without from 'lodash/without';

import { DEFAULT } from '../../../const';

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
} from '../../../components/Games/types';

export const INITIAL_STATE = {
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

export default (state = DEFAULT.OBJECT, { type = DEFAULT.STRING, payload = DEFAULT.NULL}) => {
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