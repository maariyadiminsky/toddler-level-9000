import React  from "react";

import { useGetLocalStorageReduxState, useSetLocalStorageReduxState } from "../hooks/localStorage";

const Main = () => {
    useGetLocalStorageReduxState();
    
    return (
        <div>Main</div>
    );
}

export default Main;