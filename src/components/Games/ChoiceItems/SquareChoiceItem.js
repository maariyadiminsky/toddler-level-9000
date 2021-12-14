import React from 'react';

import { DEFAULT } from '../../../const';
import { getCorrectImageUrlBasedOnType } from '../../../utils/image';

const SquareChoiceItem = ({ item = DEFAULT.STRING, type = DEFAULT.STRING, handleCompleteRoundCallback = DEFAULT.NULL }) => (
    <div onClick={() => handleCompleteRoundCallback(item)} >
        <img 
            alt={item}
            className="m-auto flex justify-center items-center content-center rounded-2xl fill-current bg-gradient-to-br shadow-lg hover:shadow-2xl"
            src={getCorrectImageUrlBasedOnType(item, type)}
        />
    </div>
);

export default SquareChoiceItem;