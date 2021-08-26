import React from "react";

import WhatIsThisGame from "../components/Games/WhatIsThisGame";

import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE
} from "../const";

// todo: to find wordType, useParams

const Game = () => {
    // todo get game type based on url params
    return (
        <div className="container pb-28 pt-10 h-screen">
            <WhatIsThisGame wordType={COLOR_TYPE} />
        </div>
    );
}

export default Game;