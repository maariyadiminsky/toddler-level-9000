import React from 'react';

import { getCustomCSSForWordsToChooseFrom } from '../../../utils/words';

const CircleChoiceItem = ({ item, handleCompleteRoundCallback, type }) => (
    <div 
        onClick={() => handleCompleteRoundCallback(item)} 
        className={`m-auto poppins flex justify-center items-center content-center h-36 w-36 rounded-full fill-current bg-gradient-to-br ${getCustomCSSForWordsToChooseFrom(type, item)} shadow-lg hover:shadow-2xl`}
    >
        {item}
    </div>
);

export default CircleChoiceItem;