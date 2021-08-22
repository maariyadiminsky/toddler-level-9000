import React from "react";
import WhatIsThisGame from "../components/Games/WhatIsThisGame";

import { useGetLocalStorageData } from "../hooks/localStorage";

const Game = () => {
    // gets localStorage when userId exists
    useGetLocalStorageData();

    return (
        <WhatIsThisGame 
            wordType="colors" 
            initialWord="yellow" 
        />
    );
}

export default Game;