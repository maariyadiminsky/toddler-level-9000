import { 
    getNewWordsArray,
    getWordAmountToShowAtOneTime,
    getCustomCSSForWordsToChooseFrom,
    generateRandomItem,
    getCorrectWordForNumberImageType,
    getCorrectWordToFetchImageFromType,
    getCorrectWordToFetchAudioFromType
} from './';

import {
    NUMBERS,
    NUMBERS_ARR,
    NUMBER_WORDS,
    COLORS,
    ANIMALS,
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    SOCIAL_TYPE,
    COLOR_WORDS,
    ANIMAL_WORDS,
    SOCIAL_WORDS,
    WORD_TYPE_ERRORS
} from '../../const';

describe('words', () => {
    describe('getNewWordsArray', () => {
        it('returns correct items for word type', () => {
            const input1 = getNewWordsArray(COLOR_TYPE);
            const input2 = getNewWordsArray(ANIMAL_TYPE);
            const input3 = getNewWordsArray(SOCIAL_TYPE);

            const output1 = [...COLOR_WORDS];
            const output2 = [...ANIMAL_WORDS];
            const output3 = [...SOCIAL_WORDS];

            expect(input1).toEqual(output1);
            expect(input2).toEqual(output2);
            expect(input3).toEqual(output3);
        });

        it('returns error if word type doesn\'t exist', async () => {
            const randomNonExistentType = 'randomType';
            const output = WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(randomNonExistentType);

            try {
                await getNewWordsArray(randomNonExistentType);
            } catch(error) {
                expect(error.message).toEqual(output);
            }
        });
    });

    describe('getWordAmountToShowAtOneTime', () => {
        it('returns correct item amount for word type', () => {
            const input1 = getWordAmountToShowAtOneTime(COLOR_TYPE);
            const input2 = getWordAmountToShowAtOneTime(ANIMAL_TYPE);
            const input3 = getWordAmountToShowAtOneTime(SOCIAL_TYPE);

            const output = NUMBERS.FIVE;

            expect(input1).toEqual(output);
            expect(input2).toEqual(output);
            expect(input3).toEqual(output);
        });

        it('returns error if word type doesn\'t exist', async () => {
            const randomNonExistentType = 'randomType';
            const output = WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(randomNonExistentType);

            try {
                await getWordAmountToShowAtOneTime(randomNonExistentType);
            } catch(error) {
                expect(error.message).toEqual(output);
            }
        });
    });

    describe('getCustomCSSForWordsToChooseFrom', () => {
        const input1 = getCustomCSSForWordsToChooseFrom(COLOR_TYPE, COLORS.YELLOW);
        const input2 = getCustomCSSForWordsToChooseFrom(ANIMAL_TYPE);

        const output1 = 'from-yellow-300 to-yellow-400 text-white';
        const output2 = 'from-gray-50 to-gray-100 text-black font-bold';

        expect(input1).toBe(output1);
        expect(input2).toBe(output2);
    });

    it('returns error if word type doesn\'t exist', async () => {
        const randomNonExistentType = 'randomType';
        const output = WORD_TYPE_ERRORS.WORD_TYPE_DOES_NOT_EXIST(randomNonExistentType);

        try {
            await getCustomCSSForWordsToChooseFrom(randomNonExistentType);
        } catch(error) {
            expect(error.message).toEqual(output);
        }
    });

    describe('generateRandomItem', () => {
        const listMock = [COLORS.RED, COLORS.BLUE, COLORS.YELLOW];
        const listMockWithDuplicates = [COLORS.RED, COLORS.BLUE, COLORS.YELLOW, COLORS.BLUE, COLORS.RED];

        it('generates a random word from provided string list', () => {
            const input = listMock;
            const output = generateRandomItem(listMock);

            expect(input).toContain(output);
        });

        it('removes duplicates and generates a random word from provided string list', () => {
            const input = listMockWithDuplicates;
            const output = generateRandomItem(listMockWithDuplicates, true);

            expect(input).toContain(output);
        });
    });

    describe('getCorrectWordToFetchImageFromType', () => {
        it('returns correct word to fetch image for each type', () => {
            const input1 = getCorrectWordToFetchImageFromType(NUMBERS.TWO, NUMBER_TYPE);
            const input2 = getCorrectWordToFetchImageFromType(ANIMALS.BEAR, ANIMAL_TYPE);

            const output1 = getCorrectWordForNumberImageType(NUMBERS.TWO);
            const output2 = ANIMALS.BEAR;

            expect(input1).toBe(output1);
            expect(input2).toBe(output2);
        });
    });

    describe('getCorrectWordToFetchAudioFromType', () => {
        it('returns correct number word for number', () => {
            const input = getCorrectWordToFetchAudioFromType(NUMBERS.TWO, NUMBER_TYPE);
            const output = NUMBER_WORDS.TWO;

            expect(input).toBe(output);
        });
    });
});