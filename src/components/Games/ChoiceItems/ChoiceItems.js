import React from 'react';

import { isArrayExistAndNotEmpty, isObjectExistAndNotEmpty } from '../../../utils';
import { DEFAULT, COLOR_TYPE } from '../../../const';

import CircleChoiceItems from '../ChoiceItems/CircleChoiceItems';
import SquareChoiceItems from '../ChoiceItems/SquareChoiceItems';

const ChoiceItems = ({ data = DEFAULT.UNDEFINED, type = DEFAULT.STRING, wordsToChooseFrom = DEFAULT.NULL, amountToShowAtOneTimeRef = DEFAULT.NULL, handleCompleteRoundCallback = DEFAULT.NULL }) => {
    if (!isObjectExistAndNotEmpty(data) || !isArrayExistAndNotEmpty(data.images) || !isArrayExistAndNotEmpty(wordsToChooseFrom)) return null;
    
    switch(type) {
        case COLOR_TYPE:
            return (
                <CircleChoiceItems 
                    items={wordsToChooseFrom}
                    amountToShowAtOneTimeRef={amountToShowAtOneTimeRef}
                    handleCompleteRoundCallback={handleCompleteRoundCallback}
                    type={type}
                />
            );
        default:
            return (
                <SquareChoiceItems
                    items={wordsToChooseFrom}
                    amountToShowAtOneTimeRef={amountToShowAtOneTimeRef}
                    handleCompleteRoundCallback={handleCompleteRoundCallback}
                    type={type}
                />
            );
    }
}

export default ChoiceItems;