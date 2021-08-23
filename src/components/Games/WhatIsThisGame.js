import React from "react";
import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";

import {
    GET_RANDOM_WORD,
    REMOVE_WORD
} from "./types";

const WhatIsThisGame = ({ wordType }) => {
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    const fetchWordDataOptions = { 
        isLocalStorageUpdatedWithData: (LocalStorageDataUpdatedResponse.status === RESPONSE_SUCCESS)
    };
    // const { loading, errors, wordData } = useFetchWordData(wordType, initialWord, fetchWordDataOptions);

    return (
        <div>
            hi
        </div>
    )
}

export default WhatIsThisGame;