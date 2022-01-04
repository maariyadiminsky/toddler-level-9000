import { renderHook } from '@testing-library/react-hooks';

import { Providers } from '../../tests/utils';
import { useGetLocalStorageData, useSetLocalStorageUserId } from './';

describe('localStorage custom hooks', () => {
    describe('useGetLocalStorageData', () => {
        it('doesn\'t call dispatch if doesn\'t userId exist', () => {
            jest.spyOn(Storage.prototype, 'getItem');
            window.Storage.prototype.getItem = jest.fn();

            renderHook(() => useGetLocalStorageData(), { wrapper: Providers });

            expect(Storage.prototype.getItem).toHaveBeenCalledTimes(0);
        });
    });

    describe('useSetLocalStorageUserId', () => {
        it('doesn\'t call dispatch if doesn\'t userId exist', () => {
            jest.spyOn(Storage.prototype, 'setItem');
            window.Storage.prototype.setItem = jest.fn();

            renderHook(() => useSetLocalStorageUserId(), { wrapper: Providers });

            expect(Storage.prototype.getItem).toHaveBeenCalledTimes(0);
        });
    });
});