import React from "react";

import { useFetchWordData } from "../../hooks/words";

const WhatIsThisGame = ({ wordType, initialWord }) => {

    const { wordData, loading, errors } = useFetchWordData(wordType, initialWord);

    console.log("In whatIsThisGame", wordData, loading, errors);
    // get game data
    // todo: checks if word data exists first in state via selector
    // fetch if it doesnt exist

    return (
        <div>
            hi
        </div>
    )
}

export default WhatIsThisGame;