import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DEFAULT, ROOT_PATH } from '../../../const';

import './GameArenaItem.css';

export const customDivClassTry = (customDivClass) => `game-arena-item ${customDivClass}`;
export const customImgClassTry = (customImgClass) => customImgClass === '' ? 'min-w-full' : customImgClass;
const GameArenaItem = ({ imageUrl = DEFAULT.STRING, altText = DEFAULT.STRING, customDivClass = DEFAULT.STRING,  customImgClass = DEFAULT.STRING, link = ROOT_PATH }) => (
    <div className={customDivClassTry(customDivClass)}>
        <Link to={link}>
            <img 
                className={customImgClassTry(customImgClass)} 
                src={imageUrl} 
                alt={altText}
            />
        </Link>
    </div>
);

GameArenaItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    altText: PropTypes.string,
    customDivClass: PropTypes.string,
    customImgClass: PropTypes.string,
};

export default GameArenaItem