import React, { useState, useEffect }  from "react";
import { useDispatch } from "react-redux";

import { fetchWordData } from "../redux/actions/words";
import { useGetLocalStorageReduxState } from "../hooks/localStorage";

const Main = () => {
    // useGetLocalStorageReduxState("add user id here eventually");
    const [word, setWord] = useState("yellow");

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchWordData("colors", word))
    }, [word])

    return (
        <div>Main</div>
    );
}

export default Main;