import React from 'react';
import GameArenaItem from './GameArenaItem';

import { gameArenaData } from './data';

const GameArena = () => {
    const renderGameArenaItems = () => (
        gameArenaData.map(({
            id, 
            imageUrl, 
            altText, 
            customDivClass, 
            customImgClass,
            link
        }) => (
            <GameArenaItem
                key={id}
                imageUrl={imageUrl}
                altText={altText}
                customDivClass={customDivClass}
                customImgClass={customImgClass}
                link={link}
            />
        ))
    );

    return (
        <div className="container py-16">
            <div className="grid grid-cols-3 gap-y-5 gap-x-7">
                {renderGameArenaItems()}
            </div>
        </div>
    );
};

export default GameArena;