import React from 'react';

import { isArrayExistAndNotEmpty, isObjectExistAndNotEmpty} from '../../utils';
import { generateRandomItems } from '../../utils/words';

import RotatingImages from './RotatingImages';

const RandomImageGenerator = ({ data, randomImagesRef, wordType }) => {
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

export default RandomImageGenerator;