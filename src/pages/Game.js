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

const Game = () => {
    const { wordTypeId } = useParams();
    
    return (
        <div className="container pb-28 pt-10 h-screen">
            <WhatIsThisGame wordType={wordTypeId} />
        </div>
    );
}

export default Game;