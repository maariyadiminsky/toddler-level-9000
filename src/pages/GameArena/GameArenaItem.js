import React from "react";

import "./css/GameArenaItem.css";

const GameArenaItem = ({ 
    imageUrl,
    altText = "",
    customDivClass = "", 
    customImgClass = ""
}) => {
    return (
        <div className={`game-arena-item ${customDivClass}`}>
            <img 
                className={customImgClass === "" ? "min-w-full" : customImgClass} 
                src={imageUrl} 
                alt={altText}
            />
        </div>
    );
};

export default GameArenaItem