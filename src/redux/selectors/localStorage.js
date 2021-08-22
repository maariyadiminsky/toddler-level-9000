export const getWordData = ({ localStorage }, wordType) => localStorage[wordType];
export const getParentCode = ({ localStorage: { parentCode }}) => parentCode;
export const getStarsEarned = ({ localStorage: { starsEarned }}) => starsEarned;
export const getMasteredWords = ({ localStorage: { masteredWords }}, wordType) => masteredWords[wordType];