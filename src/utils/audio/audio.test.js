import { render, screen } from '../tests/utils';

import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    SOCIAL_TYPE,
} from '../../const';
import LetsPlayAGame_Girl from '../../components/Games/audio/LetsPlayAGame_Girl.mp3';
import LetsPlayAGame_Boy from '../../components/Games/audio/LetsPlayAGame_Boy.mp3';

import { getWelcomeAudio } from './'

describe('getWelcomeAudio', () => {
    it('returns the correct idea based on word type', () => {
        const input1 = getWelcomeAudio(COLOR_TYPE);
        const input2 = getWelcomeAudio(ANIMAL_TYPE);
        const input3 = getWelcomeAudio(SOCIAL_TYPE);

        expect(input1).toBe(LetsPlayAGame_Boy);
    });
});