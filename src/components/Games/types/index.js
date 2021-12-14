import { DEFAULT } from '../../../const';

// game
export const START_NEW_GAME = 'game/startNewGame';
export const START_NEW_ROUND = 'games/startNewRound';
export const COMPLETE_ROUND = 'game/completeRound';
export const COMPLETE_ALL_ROUNDS = 'game/completeAllRounds';

// words
export const SET_WORDS = 'game/setWords';
export const SET_CURRENT_WORD = 'game/setCurrentWord';
export const SET_WORDS_TO_CHOOSE_FROM = 'games/setWordsToChooseFrom';

// audio
export const SET_AUDIO = 'games/setAudio';
export const SET_CURRENT_WORD_AUDIO = 'games/setCurrentWordAudio';

export const ERROR_IN_TYPES = {
    TYPE_DOES_NOT_EXIST: (componentName = DEFAULT.STRING) => `ERROR IN ${componentName} Component: Type does not exist!`
}