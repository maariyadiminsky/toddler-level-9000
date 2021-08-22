import React from "react";
import WhatIsThisGame from "../components/Games/WhatIsThisGame";

import { useGetLocalStorageData } from "../hooks/localStorage";

const Game = () => {
    // gets localStorage when userId exists
    // useGetLocalStorageData();

    return (
        <WhatIsThisGame 
            wordType="animals" 
            initialWord="bunny" 
        />
    );
}

export default Game;