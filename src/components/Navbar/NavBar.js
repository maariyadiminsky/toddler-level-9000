import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton";
import StarsEarned from "../Stars/StarsEarned";

import logo from "./logo.png";

const NavBar = () => {
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
                <StarsEarned />
                <AuthButton />
            </div>
        </nav>
    );
};

export default NavBar;