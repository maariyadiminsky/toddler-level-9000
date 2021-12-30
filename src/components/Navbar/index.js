import React from 'react';
import { Link } from 'react-router-dom';

import AuthButton from '../AuthButton';
import StarsEarned from '../Stars/StarsEarned';

import { useShouldShowOnPathsExcept } from '../../hooks';
import { GAME_PATH } from '../../const';

import logo from './logo.png';

const NavBar = () => {
    const [shouldShow] = useShouldShowOnPathsExcept(GAME_PATH);

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
                {shouldShow && <StarsEarned />}
                <AuthButton />
            </div>
        </nav>
    );
};

export default NavBar;