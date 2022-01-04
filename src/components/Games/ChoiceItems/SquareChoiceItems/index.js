import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT, ANIMAL_TYPE, FOOD_TYPE } from '../../../../const';

import SquareChoiceItem from '../SquareChoiceItem';

const getCustomCSSForWordsToChooseFromBasedOnType = (type = DEFAULT.STRING) => {
    switch(type) {
        case ANIMAL_TYPE:
            return 'mt-12 m-20';
        case FOOD_TYPE:
            return 'mt-10 mx-72';
        default:
            return '';
    }
}

const SquareChoiceItems = ({ items = DEFAULT.NULL, type = DEFAULT.STRING, amountToShowAtOneTimeRef = DEFAULT.NULL, handleCompleteRoundCallback = DEFAULT.NULL }) => (
    <div className={`${getCustomCSSForWordsToChooseFromBasedOnType(type)} grid cursor-pointer grid-cols-${amountToShowAtOneTimeRef.current} gap-x-7`}>
        {items && items.map((item = DEFAULT.STRING) => (
            <SquareChoiceItem
                key={item} 
                item={item}
                type={type}
                handleCompleteRoundCallback={handleCompleteRoundCallback}
            />
        ))}
    </div>
);

SquareChoiceItems.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCompleteRoundCallback: PropTypes.func.isRequired,
    amountToShowAtOneTimeRef: PropTypes.shape({
        current: PropTypes.number.isRequired
    }).isRequired,
};

export default SquareChoiceItems;