import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT } from '../../../const';
import { getCustomCSSForWordsToChooseFrom } from '../../../utils/words';

const CircleChoiceItem = ({ item = DEFAULT.STRING, type = DEFAULT.STRING, handleCompleteRoundCallback = DEFAULT.NULL }) => (
    <div 
        onClick={() => handleCompleteRoundCallback(item)} 
        className={`m-auto poppins flex justify-center items-center content-center h-36 w-36 rounded-full fill-current bg-gradient-to-br ${getCustomCSSForWordsToChooseFrom(type, item)} shadow-lg hover:shadow-2xl`}
    >
        {item}
    </div>
);

CircleChoiceItem.propTypes = {
    item: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleCompleteRoundCallback: PropTypes.func.isRequired,
};

export default CircleChoiceItem;