// temp component

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
    const { user, isAuthenticated } = useAuth0();

    console.log("in user", user);

    return (
        isAuthenticated ? (
            <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>
        ) : "Not authenticated yet"
    );
};