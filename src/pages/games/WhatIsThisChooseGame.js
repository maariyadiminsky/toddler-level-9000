import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetLocalStorageData } from "../hooks/localStorage";

const WhatIsThisChooseGame = ({ wordType }) => {
    // gets localStorage when userId exists
    useGetLocalStorageData();

    // get game data
    // todo: ccheks if word data exists first in state via selector
    // fetch if it doesnt exist
}

export default WhatIsThisChooseGame;