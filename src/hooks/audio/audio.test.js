import { renderHook } from '@testing-library/react-hooks';

import { COLOR_TYPE } from '../../const';
import { SET_AUDIO, SET_CURRENT_WORD_AUDIO } from '../../components/Games/types';
import { useAudio } from './';

describe('audio custom hooks', () => {
    let wordData;
    let dispatch;

    beforeAll(() => {
        wordData = {
            audio: ['someAudio', ]
        };
        dispatch = jest.fn();
    });

    describe('useAudio', () => {
        it('calls dispatch if passes valid side effect and truthy value is true', () => {
            const truthyValue = true;

            renderHook(() => {
                useAudio(truthyValue, wordData?.audio, COLOR_TYPE, SET_AUDIO, dispatch);
            });

            expect(dispatch).toHaveBeenCalledTimes(1);

            renderHook(() => {
                useAudio(truthyValue, wordData?.audio, COLOR_TYPE, SET_CURRENT_WORD_AUDIO, dispatch);
            });

            expect(dispatch).toHaveBeenCalledTimes(2);
        });

        it('doesn\'t call dispatch if passes invalid side effect', () => {
            const truthyValue = true;
            const invalidSideEffect = 'some random invalid side effect';

            renderHook(() => {
                useAudio(truthyValue, wordData?.audio, COLOR_TYPE, invalidSideEffect, dispatch);
            });

            expect(dispatch).toHaveBeenCalledTimes(0);
        });

        it('doesn\'t call dispatch if truthy value is false', () => {
            const truthyValue = false;

            renderHook(() => {
                useAudio(truthyValue, wordData?.audio, COLOR_TYPE, SET_AUDIO, dispatch);
            });

            expect(dispatch).toHaveBeenCalledTimes(0);
        });
    });
});