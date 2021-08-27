import React from "react";
import { Link } from "react-router-dom";

import "./css/GameArenaItem.css";

const GameArenaItem = ({ 
    imageUrl,
    altText = "",
    customDivClass = "", 
    customImgClass = "",
    link="/"
}) => {
    return (
        <div className={`game-arena-item ${customDivClass}`}>
            <Link to={link}>
                <img 
                    className={customImgClass === "" ? "min-w-full" : customImgClass} 
                    src={imageUrl} 
                    alt={altText}
                />
            </Link>
        </div>
    );
};

export default GameArenaItem