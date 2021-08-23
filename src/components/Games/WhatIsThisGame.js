import React, { useReducer } from "react";
import { useGetLocalStorageData } from "../../hooks/localStorage";
import { useFetchWordData } from "../../hooks/words";
import { RESPONSE_SUCCESS } from "../../redux/actions/types";

import {
    SET_WORD_DATA,
    GET_RANDOM_WORD,
    REMOVE_WORD,

    ERROR_IN_TYPES
} from "./types";

const INITIAL_STATE = {
    rounds: 5, // for 5 words
    wordData: {},
    wordsPracticed: [],
    currentWord: {}
};

const reducer = (state, { type, payload}) => {
  switch (type) {
    case SET_WORD_DATA:
          return {...state, wordData: payload };
    case GET_RANDOM_WORD:
      return {}
    case REMOVE_WORD:
      return {}
    default:
      throw new Error(ERROR_IN_TYPES.TYPE_DOES_NOT_EXIST("WhatIsThisGame"));
  }
}

const WhatIsThisGame = ({ wordType }) => {
    const LocalStorageDataUpdatedResponse = useGetLocalStorageData();
    
    const fetchWordDataOptions = { 
        isLocalStorageUpdatedWithData: (LocalStorageDataUpdatedResponse.status === RESPONSE_SUCCESS)
    };
    // const { loading, errors, wordData } = useFetchWordData(wordType, initialWord, fetchWordDataOptions);

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    if (!wordData) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            hi
        </div>
    )
}

export default WhatIsThisGame;