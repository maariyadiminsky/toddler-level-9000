import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT } from '../../const';
import { getCorrectImageURL } from '../../utils/image';

const RotatingImages = ({ images = DEFAULT.NULL, wordType = DEFAULT.STRING }) => (
    images.map(({ id = DEFAULT.STRING, altText = DEFAULT.STRING, imageUrl = DEFAULT.STRING }) => (
        <div key={id}>
            <div 
                className={'bg-white rounded-2xl shadow-lg hover:animate-ping hover:shadow-2xl hover:rotate-45 hover:scale-75 transform transition duration-300'}
            >
                <img
                    key={id}
                    className="min-w-full rounded-2xl"
                    src={getCorrectImageURL(imageUrl, wordType)} 
                    alt={altText}
                />
            </div>
        </div>
    ))
);

RotatingImages.propTypes = {
    wordType: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            altText: PropTypes.string,
            imageUrl: PropTypes.string.isRequired,
            credit: PropTypes.shape({
                imageLink: PropTypes.string.isRequired,
                profileLink: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        })
    ).isRequired,
}

export default RotatingImages;