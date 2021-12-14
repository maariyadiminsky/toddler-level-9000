import { DEFAULT } from '../../const';

export const getWordTypeDataSelector = ({ localStorage = DEFAULT.UNDEFINED }, wordType = DEFAULT.STRING, word = DEFAULT.STRING) => localStorage[wordType][word];
export const getParentCodeSelector = ({ localStorage: { parentCode = DEFAULT.STRING }}) => parentCode;
export const getStarsEarnedSelector = ({ localStorage: { starsEarned = DEFAULT.NULL }}) => starsEarned;
export const getMasteredWordsSelector = ({ localStorage: { masteredWords = DEFAULT.UNDEFINED }}, wordType = DEFAULT.STRING) => masteredWords[wordType];