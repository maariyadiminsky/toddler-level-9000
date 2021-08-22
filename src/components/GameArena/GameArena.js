import React from "react";
import GameArenaItem from "./GameArenaItem";

import { gameArenaData } from "./data";

const GameArena = () => {
    // todo: create a loader and replace here
    if (gameArenaData.length === 0) {
        return (
            <div>Loading...</div>
        );
    }

    const renderGameArenaItems = () => (
        gameArenaData.map(({
            id, 
            imageUrl, 
            altText, 
            customDivClass, 
            customImgClass
        }) => (
            <GameArenaItem
                key={id}
                imageUrl={imageUrl}
                altText={altText}
                customDivClass={customDivClass}
                customImgClass={customImgClass}
            />
        ))
    );

    return (
        <div className="container my-16">
            <div className="grid grid-cols-3 gap-y-5 gap-x-7">
                {renderGameArenaItems()}
            </div>
        </div>
    );
};

export default GameArena;