import { getKeyExistInLocalStorage } from './';
import { DEFAULT } from '../../const';

describe('localStorage', () => {
    describe('getKeyExistInLocalStorage', () => {
        let mockStorage = {};

        beforeEach(() => {
            mockStorage = {};
            global.Storage.prototype.setItem = jest.fn((key, value) => {
                mockStorage[key] = value;
            })
            global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
        });

        it('returns value if key exists', () => {
            const key = 'foo';
            const value = 'bar';
            global.Storage.prototype.setItem(key, value);
            
            const input = mockStorage[key];
            const output = value;

            expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
            expect(input).toEqual(output);
        });

        it('returns null if key doesn\'t exist', () => {
            const key = 'foo';
            
            const input = mockStorage[key];
            const output = DEFAULT.UNDEFINED;

            expect(input).toBe(output);
        });

        afterAll(() => {
            global.Storage.prototype.setItem.mockReset()
            global.Storage.prototype.getItem.mockReset()
        });
    });
});