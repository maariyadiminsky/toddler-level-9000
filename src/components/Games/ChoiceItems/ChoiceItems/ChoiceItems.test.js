import { render, screen } from '../../../../tests/utils';

import { 
    DEFAULT,
    COLOR_WORDS,
    COLOR_TYPE 
} from '../../../../const';
import ChoiceItems from './';

describe('ChoicesItems', () => {
    let data;
    let wordsToChooseFrom;
    let handleCompleteRound;
    let amountToShowAtOneTimeRef;
    beforeAll(() => {
        data = { 
            images: [{
                id: '0',
                altText: 'some-image',
                imageUrl: '/some-url',
                credit: {
                    imageLink: '/some-url',
                    profileLink: '/some-profile-link',
                    name: 'some author',
                }
            }]
        };
        wordsToChooseFrom = COLOR_WORDS.slice(COLOR_WORDS.length-5, COLOR_WORDS.length);
        amountToShowAtOneTimeRef = { current: 3 };
        handleCompleteRound = jest.fn();
    });

    it('renders component SquareChoiceItems by default', () => {
        const { getByRole } = render(
            <ChoiceItems 
                data={data}
                type={DEFAULT.STRING}
                wordsToChooseFrom={wordsToChooseFrom}
                amountToShowAtOneTimeRef={amountToShowAtOneTimeRef}
                handleCompleteRoundCallback={handleCompleteRound}
            />
        );
    });

    it('renders CircleChoiceItems if an applicable word type exists', () => {

    });
});