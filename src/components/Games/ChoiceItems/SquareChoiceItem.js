import React from 'react';
import PropTypes from 'prop-types';

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

SquareChoiceItem.propTypes = {
    item: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleCompleteRoundCallback: PropTypes.func.isRequired,
};

export default SquareChoiceItem;