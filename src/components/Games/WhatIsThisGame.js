import React from "react";
import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";


const WhatIsThisGame = ({ wordType, initialWord }) => {
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    const fetchWordDataOptions = { 
        isLocalStorageUpdatedWithData: (LocalStorageDataUpdatedResponse.status === RESPONSE_SUCCESS)
    };
    const { loading, errors, wordData } = useFetchWordData(wordType, initialWord, fetchWordDataOptions);

    return (
        <div>
            hi
        </div>
    )
}

export default WhatIsThisGame;