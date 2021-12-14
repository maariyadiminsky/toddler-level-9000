import React from 'react';

import { DEFAULT } from '../../const';
import { getCorrectImageURL } from '../../utils/image';

const RotatingImages = ({ images = DEFAULT.NULL, wordType = DEFAULT.STRING }) => (
    images && images.map(({ id = DEFAULT.STRING, altText = DEFAULT.STRING, imageUrl = DEFAULT.STRING }) => (
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

export default RotatingImages;