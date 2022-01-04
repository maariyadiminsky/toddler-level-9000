import { useEffect } from 'react';

import { DEFAULT } from '../../const';
import { 
    getCorrectAudioUrl,
    getWelcomeAudio,
    getStartAudio,
    generateGameCompleteAudio
} from '../../utils/audio';
import { SET_AUDIO, SET_CURRENT_WORD_AUDIO } from '../../components/Games/types';

export const useAudio = (truthyCheck = DEFAULT.BOOL_FALSE, audio = DEFAULT.UNDEFINED, wordType = DEFAULT.STRING, sideEffectType = DEFAULT.STRING, dispatch = DEFAULT.NULL) => {
    useEffect(() => {
        if (truthyCheck) {
            if (sideEffectType === SET_CURRENT_WORD_AUDIO) {
                dispatch({
                    type: SET_CURRENT_WORD_AUDIO,
                    payload: new Audio(getCorrectAudioUrl(audio[0], wordType))
                })
            } else if (sideEffectType === SET_AUDIO) {
                dispatch({
                    type: SET_AUDIO,
                    payload: {
                        welcomeAudio: new Audio(getWelcomeAudio(wordType)),
                        startAudio: new Audio(getStartAudio(wordType)),
                        gameCompleteAudio: new Audio(generateGameCompleteAudio(wordType))
                    }
                })
            }
        }
    }, [truthyCheck, sideEffectType, wordType, audio])
};