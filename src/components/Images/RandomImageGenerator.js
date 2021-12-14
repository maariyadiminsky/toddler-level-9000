import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT } from '../../const';
import { isArrayExistAndNotEmpty, isObjectExistAndNotEmpty} from '../../utils';
import { generateRandomItems } from '../../utils/words';

import RotatingImages from './RotatingImages';

const RandomImageGenerator = ({ data = DEFAULT.UNDEFINED, randomImagesRef = DEFAULT.NULL, wordType = DEFAULT.STRING }) => {
    if (!isObjectExistAndNotEmpty(data) || !isArrayExistAndNotEmpty(data.images)) return null;

    // generates 3 - 5 random images out of the 10 returned from the API
    randomImagesRef.current = generateRandomItems(data.images, 3);

    if (randomImagesRef.current.length === 0) return null;

    return (
        <div className="container px-36">
            <div className="cursor-pointer grid grid-cols-3 gap-y-5 gap-x-10">
                <RotatingImages images={randomImagesRef.current} wordType={wordType} />
            </div>
        </div>
    );
}

RandomImageGenerator.propTypes = {
    wordType: PropTypes.string.isRequired,
    randomImagesRef: PropTypes.shape({
        current: PropTypes.arrayOf(
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
        ),
    }).isRequired,
    data: PropTypes.shape({
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
        )
    }),
}

export default RandomImageGenerator;