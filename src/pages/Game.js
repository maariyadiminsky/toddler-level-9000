import React from "react";

import WhatIsThisGame from "../components/Games/WhatIsThisGame";

import {
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE
} from "../const";

const Game = () => {
    // todo get game type based on url params
    return (
        <WhatIsThisGame wordType={COLOR_TYPE} />
    );
}

export default Game;