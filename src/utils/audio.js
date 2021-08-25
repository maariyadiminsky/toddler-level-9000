import {
    SOCIAL_TYPE,
} from "../const";

export const getCorrectAudioUrl = (sound, wordType) => {
    switch(wordType) {
        case SOCIAL_TYPE:
            return `https://docs.google.com/uc?export=open&id=${sound}`;
        default:
            return `https://${sound}`;
    }
}