import { getKeyExistInLocalStorage } from './';
import { createMock, removeMock } from '../../tests/utils/localStorageMock';
import { DEFAULT } from '../../const';

describe('localStorage', () => {
    describe('getKeyExistInLocalStorage', () => {
        it('returns value if key exists', () => {
            createMock();

            const key = 'foo';
            const value = 'bar';
            localStorage.setItem(key, value);
            
            const input = getKeyExistInLocalStorage(key);
            const output = value;

            expect(input).toBe(output);

            removeMock();
        });

        it('returns null if key doesn\'t exist', () => {
            createMock();

            const key = 'foo';
            
            const input = getKeyExistInLocalStorage(key);
            const output = DEFAULT.NULL;

            expect(input).toBe(output);

            removeMock();
        });
    });
});