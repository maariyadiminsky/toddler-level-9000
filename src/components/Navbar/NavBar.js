import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import AuthButton from "../AuthButton";
import StarsEarned from "../Stars/StarsEarned";

import { GAME_PATH } from "../../const";

import logo from "./logo.png";

const NavBar = () => {
    const { pathname } = useLocation();
    const [shouldShowStars, setShouldShowStars] = useState(false);

    useEffect(() => {
        setShouldShowStars(!pathname.includes(GAME_PATH));
    }, [pathname])

    return (
        <nav className="p-3 bg-indigo-600">
            <div className="md:container px-4 md:px-0 mx-auto flex justify-between">
                <Link to="/">
                    <img 
                        className="w-40" 
                        src={logo} 
                        alt="logo"
                    />
                </Link>
                {shouldShowStars && <StarsEarned />}
                <AuthButton />
            </div>
        </nav>
    );
};

export default NavBar;