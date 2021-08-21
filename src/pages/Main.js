import React from "react";
import { useGetLocalStorageData } from "../hooks/localStorage";

import AuthButton from "../components/AuthButton";

const Main = () => {
    // gets localStorage when userId exists
    useGetLocalStorageData();

    // later show Loading in modal while userId is not created and why localStorage data has not be populated

    // dispatch(fetchWordData("social"); import { fetchWordData } from "../redux/actions/words";

    return (
        <div>
            <AuthButton />
            <br />
        </div>
    );
}

export default Main;