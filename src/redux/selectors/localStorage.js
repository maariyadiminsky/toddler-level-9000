export const getWordTypeDataSelector = ({ localStorage }, wordType, word) => localStorage[wordType][word];
export const getParentCodeSelector = ({ localStorage: { parentCode }}) => parentCode;
export const getStarsEarnedSelector = ({ localStorage: { starsEarned }}) => starsEarned;
export const getMasteredWordsSelector = ({ localStorage: { masteredWords }}, wordType) => masteredWords[wordType];