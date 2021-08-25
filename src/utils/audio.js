import LetsPlayAGame_Girl from "../components/Games/audio/LetsPlayAGame_Girl.mp3";
import LetsPlayAGame_Boy from "../components/Games/audio/LetsPlayAGame_Boy.mp3";
import LetsPlayAGame_Man from "../components/Games/audio/LetsPlayAGame_Man.mp3";
import LetsLearnSomeSocialWords_Girl from "../components/Games/audio/LetsLearnSomeSocialWords_Girl.mp3";

import WhatAnimalDoYouSee_Girl from "../components/Games/audio/WhatAnimalDoYouSee_Girl.mp3";
import WhatColorDoYouSee_Boy from "../components/Games/audio/WhatColorDoYouSee_Boy.mp3";
import WhatFoodItemDoYouSee_Man from "../components/Games/audio/WhatFoodItemDoYouSee_Man.mp3";
import WhatNumberIsThat_Man from "../components/Games/audio/WhatNumberIsThat_Man.mp3";

import GoodJob_Boy from "../components/Games/audio/GoodJob_Boy.mp3";
import HoorayYouGotThemAll_Girl from "../components/Games/audio/HoorayYouGotThemAll_Girl.mp3";
import NiceJob_Girl from "../components/Games/audio/NiceJob_Girl.mp3";
import NiceJob_Man from "../components/Games/audio/NiceJob_Man.mp3";
import WowNiceJob_Boy from "../components/Games/audio/WowNiceJob_Boy.mp3";
import WowNiceWork_Girl from "../components/Games/audio/WowNiceWork_Girl.mp3";
import WowYouGotThemAll_Man from "../components/Games/audio/WowYouGotThemAll_Man.mp3";
import YayYouDidIt_Girl from "../components/Games/audio/YayYouDidIt_Girl.mp3";
import YesYouGotThemAll_Boy from "../components/Games/audio/YesYouGotThemAll_Boy.mp3";
import YouDidIt_Boy from "../components/Games/audio/YouDidIt_Boy.mp3";
import YouDidIt_Man from "../components/Games/audio/YouDidIt_Man.mp3";

import { generateRandomNumber } from "./words";

import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE,
    BODY_TYPE
} from "../const";

let welcomeAudio;
let startAudio;
export const getGameStartAudio = (wordType) => {
    welcomeAudio = "";
    startAudio = "";

    switch(wordType) {
        case COLOR_TYPE:
            welcomeAudio = LetsPlayAGame_Boy;
            startAudio = WhatColorDoYouSee_Boy;
            break;
        case ANIMAL_TYPE:
            welcomeAudio = LetsPlayAGame_Girl;
            startAudio = WhatAnimalDoYouSee_Girl;
            break;
        case NUMBER_TYPE:
            welcomeAudio = LetsPlayAGame_Man;
            startAudio = WhatNumberIsThat_Man;
            break;
        case FOOD_TYPE:
            welcomeAudio = LetsPlayAGame_Man;
            startAudio = WhatFoodItemDoYouSee_Man;
            break;
        case SOCIAL_TYPE:
            welcomeAudio = LetsPlayAGame_Girl;
            startAudio = LetsLearnSomeSocialWords_Girl;
            break;
        case BODY_TYPE:
            // todo add here when this game type is ready
            break;
            // todo add match time audio here as well.
        default:
            break;
    }

    return {
        welcomeAudio,
        startAudio
    };
}

let boyGameCompleteAudio = [
    GoodJob_Boy,
    WowNiceJob_Boy,
    YesYouGotThemAll_Boy,
    YouDidIt_Boy
];
let girlGameCompleteAudio = [
    HoorayYouGotThemAll_Girl,
    NiceJob_Girl,
    WowNiceWork_Girl,
    YayYouDidIt_Girl
];
let manGameCompleteAudio = [
    NiceJob_Man,
    WowYouGotThemAll_Man,
    YouDidIt_Man
];
let gameCompleteAudio = [];
export const getRandomGameCompleteAudio = (wordType) => {
    gameCompleteAudio = [];

    switch(wordType) {
        case COLOR_TYPE:
            gameCompleteAudio = boyGameCompleteAudio;
            break;
        case ANIMAL_TYPE:
        case SOCIAL_TYPE:
            gameCompleteAudio = girlGameCompleteAudio;
            break;
        case NUMBER_TYPE:
        case FOOD_TYPE:
            gameCompleteAudio = manGameCompleteAudio;
            break;
        case BODY_TYPE:
            // todo add here when this game type is ready
            break;
            // todo add match time audio here as well.
        default:
            break;
    }

    return gameCompleteAudio[generateRandomNumber(girlGameCompleteAudio.length)];
}

export const getCorrectAudioUrl = (sound, wordType) => {
    switch(wordType) {
        case SOCIAL_TYPE:
            return `https://docs.google.com/uc?export=open&id=${sound}`;
        default:
            return `https://${sound}`;
    }
}