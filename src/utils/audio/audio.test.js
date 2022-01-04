import LetsPlayAGame_Girl from '../../components/Games/audio/LetsPlayAGame_Girl.mp3';
import LetsPlayAGame_Boy from '../../components/Games/audio/LetsPlayAGame_Boy.mp3';
import WhatAnimalDoYouSee_Girl from '../../components/Games/audio/WhatAnimalDoYouSee_Girl.mp3';
import WhatColorDoYouSee_Boy from '../../components/Games/audio/WhatColorDoYouSee_Boy.mp3';
import LetsLearnSomeSocialWords_Girl from '../../components/Games/audio/LetsLearnSomeSocialWords_Girl.mp3';
import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    SOCIAL_TYPE,
} from '../../const';
import { 
    getWelcomeAudio,
    getStartAudio,
    generateGameCompleteAudio,
    generateCompleteSoundEffect,
    boyGameCompleteAudio,
    girlGameCompleteAudio,
    completeGameSoundEffects,
    getCorrectAudioUrl,
    GENERAL_URL,
    ALTERNATIVE_URL
} from './'

describe('audio', () => {
    describe('getWelcomeAudio', () => {
        it('returns the correct welcome audio based on word type', () => {
            const input1 = getWelcomeAudio(COLOR_TYPE);
            const input2 = getWelcomeAudio(ANIMAL_TYPE);
            const input3 = getWelcomeAudio(SOCIAL_TYPE);

            const output1 = LetsPlayAGame_Boy;
            const output2 = LetsPlayAGame_Girl;
    
            expect(input1).toBe(output1);
            expect(input1).not.toBe(output2);
            expect(input2).toBe(output2);
            expect(input2).not.toBe(output1);
            expect(input3).toBe(output2);
            expect(input3).not.toBe(output1);
        });
    });

    describe('getStartAudio', () => {
        it('returns the correct start audio based on word type', () => {
            const input1 = getStartAudio(COLOR_TYPE);
            const input2 = getStartAudio(ANIMAL_TYPE);
            const input3 = getStartAudio(SOCIAL_TYPE);

            const output1 = WhatColorDoYouSee_Boy;
            const output2 = WhatAnimalDoYouSee_Girl;
            const output3 = LetsLearnSomeSocialWords_Girl;

            expect(input1).toBe(output1);
            expect(input2).toBe(output2);
            expect(input3).toBe(output3);
        });
    });

    describe('generateGameCompleteAudio', () => {
        it('returns the correct game complete audio based on word type', () => {
            const input1 = boyGameCompleteAudio;
            const input2 = girlGameCompleteAudio;

            const output1 = generateGameCompleteAudio(COLOR_TYPE);
            const output2 = generateGameCompleteAudio(ANIMAL_TYPE);
            const output3 = generateGameCompleteAudio(SOCIAL_TYPE);
    
            expect(input1).toContain(output1);
            expect(input2).toContain(output2);
            expect(input2).toContain(output3);
        });

        it('returns nothing if no existing word type is passed in', () => {
            const input = generateGameCompleteAudio('some random non existent word type');
            const output = null;
    
            expect(input).toBe(output);
        });
    });

    describe('generateCompleteSoundEffect', () => {
        it('returns one of existing sound effect audio for game completion', () => {
            const input = completeGameSoundEffects;
            const output = generateCompleteSoundEffect();

            expect(input).toContain(output);
        });
    });

    describe('getCorrectAudioUrl', () => {
        it('returns correct url path depending on word type', () => {
            const soundMock = 'someSoundName';
            const input1 = getCorrectAudioUrl(soundMock, COLOR_TYPE);
            const input2 = getCorrectAudioUrl(soundMock, ANIMAL_TYPE);
            const input3 = getCorrectAudioUrl(soundMock, SOCIAL_TYPE);

            const output1 = GENERAL_URL(soundMock);
            const output2 = ALTERNATIVE_URL(soundMock);

            expect(input1).toBe(output1);
            expect(input2).toBe(output1);
            expect(input3).toBe(output2);
        })
    });
});