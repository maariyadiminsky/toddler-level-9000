import React from 'react';
import { Link } from 'react-router-dom';

import { DEFAULT, ROOT_PATH } from '../../const';

import './css/GameArenaItem.css';

const GameArenaItem = ({ 
    imageUrl = DEFAULT.STRING,
    altText = DEFAULT.STRING,
    customDivClass = DEFAULT.STRING, 
    customImgClass = DEFAULT.STRING,
    link= ROOT_PATH
}) => (
    <div className={`game-arena-item ${customDivClass}`}>
        <Link to={link}>
            <img 
                className={customImgClass === '' ? 'min-w-full' : customImgClass} 
                src={imageUrl} 
                alt={altText}
            />
        </Link>
    </div>
);

export default GameArenaItem