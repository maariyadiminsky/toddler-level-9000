import React from 'react';
import { useParams } from 'react-router-dom';

import WhatIsThisGame from '../components/Games/WhatIsThis/WhatIsThisGame';

import {
    DEFAULT,
    COLOR_TYPE,
    ANIMAL_TYPE,
    FOOD_TYPE,
    GAME_NOT_AVAILABLE_TEMP_MESSAGE
} from '../const';

// note: temp function created while I'm still developing rest of the games
const canRenderGame = (wordType = DEFAULT.STRING) => {
    switch(wordType) {
        case COLOR_TYPE:
        case ANIMAL_TYPE:
        case FOOD_TYPE:
            return true;
        default:
            return false;
    }
}

const Game = () => {
    const { wordTypeId } = useParams();
    
    return (
        <div className="container pb-28 pt-10 h-screen">
            {canRenderGame(wordTypeId) ? <WhatIsThisGame wordType={wordTypeId} /> : GAME_NOT_AVAILABLE_TEMP_MESSAGE}
        </div>
    );
}

export default Game;