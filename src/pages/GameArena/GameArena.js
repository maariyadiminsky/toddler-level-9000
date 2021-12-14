import React from 'react';
import GameArenaItem from './GameArenaItem';

import { DEFAULT, ROOT_PATH } from '../../const';
import { gameArenaData } from './data';

const GameArena = () => {
    const renderGameArenaItems = () => (
        gameArenaData.map(({ id = DEFAULT.NULL, imageUrl = DEFAULT.STRING, altText = DEFAULT.STRING, customDivClass = DEFAULT.STRING, customImgClass = DEFAULT.STRING, link = ROOT_PATH }) => (
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