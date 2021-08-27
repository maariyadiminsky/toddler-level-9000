import React from "react";
import { useParams } from "react-router-dom";

import WhatIsThisGame from "../components/Games/WhatIsThisGame";

import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE
} from "../const";

// note: temp function created while I'm still developing rest of the games
const canRenderGame = (wordType) => {
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
            {canRenderGame(wordTypeId) ? <WhatIsThisGame wordType={wordTypeId} /> : "Sorry this game is WIP. Please select another."}
        </div>
    );
}

export default Game;