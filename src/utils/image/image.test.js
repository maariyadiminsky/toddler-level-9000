
import {
    getCorrectImageURL,
    getCorrectImageUrlBasedOnType,
    getCorrectFoodChoiceImageUrl,
    getCorrectAnimalsChoiceImageUrl,
    SOCIAL_URL
} from './';
import {
    DEFAULT,
    COLOR_TYPE,
    FOOD_TYPE,
    ANIMAL_TYPE,
    SOCIAL_TYPE,
    ANIMALS,
    FOOD
} from '../../const';

describe('image', () => {
    describe('getCorrectImageURL', () => {
        it('returns correct image url depending on word type', () => {
            const urlMock = 'someMockUrl.com';
            const input1 = getCorrectImageURL(urlMock, COLOR_TYPE);
            const input2 = getCorrectImageURL(urlMock, ANIMAL_TYPE);
            const input3 = getCorrectImageURL(urlMock, SOCIAL_TYPE);

            const output1 = urlMock;
            const output2 = SOCIAL_URL(urlMock);

            expect(input1).toBe(output1);
            expect(input2).toBe(output1);
            expect(input3).toBe(output2);
        });
    });

    describe('getCorrectFoodChoiceImageUrl', () => {
        it('returns correct image url depending on word type item', () => {
            const input1 = getCorrectImageUrlBasedOnType(ANIMALS.DOG, ANIMAL_TYPE);
            const input2 = getCorrectImageUrlBasedOnType(FOOD.APPLE, FOOD_TYPE);
            
            const output1 = getCorrectAnimalsChoiceImageUrl(ANIMALS.DOG);
            const output2 = getCorrectFoodChoiceImageUrl(FOOD.APPLE);


            expect(input1).toBe(output1);
        });

        it('returns empty string if word type doesn\'t exist', () => {
            const input = getCorrectImageUrlBasedOnType(ANIMALS.DOG, DEFAULT.STRING);
            const output = DEFAULT.STRING;

            expect(input).toBe(output);
        });
    });
});