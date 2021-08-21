// temp component

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    console.log("in user", user);
    console.log("user metadata", userMetadata);

    useEffect(() => {
        const getUserAccessToken = async() => {
            console.log("in here", user);

            // try {
            //     // will generate a new access token each time, so generate once on login and save
            //     // then use to authorize
            //     const accessToken = await getAccessTokenSilently({
            //         audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
            //         scope: "read:current_user",
            //       });

            //       const userDetailsByIdUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.sub}`;

            //       const metadataResponse = await fetch(userDetailsByIdUrl, {
            //         headers: {
            //           Authorization: `Bearer ${accessToken}`,
            //         },
            //       });
        
            //       // todo: set this access token in auth0
            //       console.log("accessToken", accessToken);
            // } catch(error) {
            //     console.log("in here error", error);
            // }
        }

        getUserAccessToken();
    }, [user?.sub])

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