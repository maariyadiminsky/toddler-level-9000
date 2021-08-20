import React  from "react";

import { useGetLocalStorageStateIntoRedux } from "../hooks/localStorage";

const Main = () => {
    useGetLocalStorageStateIntoRedux();

    return (
        <div>Main</div>
    );
}

export default Main;