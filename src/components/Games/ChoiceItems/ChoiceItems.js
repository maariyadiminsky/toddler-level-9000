import React from 'react';
import PropTypes from 'prop-types';

import { isArrayExistAndNotEmpty, isObjectExistAndNotEmpty } from '../../../utils';
import { DEFAULT, COLOR_TYPE } from '../../../const';

import CircleChoiceItems from '../ChoiceItems/CircleChoiceItems';
import SquareChoiceItems from '../ChoiceItems/SquareChoiceItems';

const ChoiceItems = ({ data = DEFAULT.UNDEFINED, type = DEFAULT.STRING, wordsToChooseFrom = DEFAULT.NULL, amountToShowAtOneTimeRef = DEFAULT.UNDEFINED, handleCompleteRoundCallback = DEFAULT.NULL }) => {
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

ChoiceItems.propTypes = {
    type: PropTypes.string.isRequired,
    wordsToChooseFrom: PropTypes.arrayOf(PropTypes.string).isRequired,
    amountToShowAtOneTimeRef: PropTypes.shape({
        current: PropTypes.number.isRequired
    }).isRequired,
    handleCompleteRoundCallback: PropTypes.func.isRequired,
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
};

export default ChoiceItems;