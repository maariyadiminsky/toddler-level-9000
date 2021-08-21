import React, { useState, useEffect }  from "react";
import { useDispatch } from "react-redux";

import { fetchWordData } from "../redux/actions/words";
import { useGetLocalStorageReduxState } from "../hooks/localStorage";

import AuthButton from "../components/AuthButton";
import User from "../components/User";

const Main = () => {
    // useGetLocalStorageReduxState("add user id here eventually");
    const [word, setWord] = useState("red");

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchWordData("social"))
    }, [word])

    return (
        <div>
            <AuthButton />
            <br />
            <User />
        </div>
    );
}

export default Main;