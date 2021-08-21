import React from "react";
import { useGetLocalStorageData } from "../hooks/localStorage";

import NavBar from "../components/Navbar/NavBar";

const Main = () => {
    // gets localStorage when userId exists
    // useGetLocalStorageData();

    // check if user is authenticated when they try to click parent section or a game
    // if they try to click parent section, make sure they have a code, if not ask them to create one

    return (
        <div>
            <NavBar />
            <br />
        </div>
    );
}

export default Main;