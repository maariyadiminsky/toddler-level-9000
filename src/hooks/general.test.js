import { renderHook } from '@testing-library/react-hooks';

import { Providers } from '../tests/utils';
import { useShouldShowOnPathsExcept, useShouldShowIfResponseSuccess } from './';
import { 
    DEFAULT,
    MOCK, 
    COLOR_TYPE,
    GAME_PATH,
    CHOICE_GAME_PATH
} from '../const';

describe('general custom hooks', () => {
    describe('useShouldShowOnPathsExcept', () => {
        it('returns true if path passed in is not included in current path', () => {
            window.history.pushState({}, '', MOCK.PATH);

            const { result: { current: [shouldShow] }} = renderHook(() => useShouldShowOnPathsExcept(GAME_PATH), { wrapper: Providers });

            expect(shouldShow).toBe(DEFAULT.BOOL_TRUE);
        });

        it('returns false if path passed in is included in current path', () => {
            window.history.pushState({}, '', CHOICE_GAME_PATH(COLOR_TYPE));

            const { result: { current: [shouldShow] }} = renderHook(() => useShouldShowOnPathsExcept(GAME_PATH), { wrapper: Providers });

            expect(shouldShow).toBe(DEFAULT.BOOL_FALSE);
        });
    });

    describe('useShouldShowIfResponseSuccess', () => {
        it('returns false if response status is not success', () => {
            const { result: { current: [shouldShow] }} = renderHook(() => useShouldShowIfResponseSuccess(), { wrapper: Providers });

            expect(shouldShow).toBe(DEFAULT.BOOL_FALSE);
        });
    });
});