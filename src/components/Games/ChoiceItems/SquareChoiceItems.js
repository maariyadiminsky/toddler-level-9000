import React from 'react';

import { ANIMAL_TYPE, FOOD_TYPE } from '../../../const';

import SquareChoiceItem from './SquareChoiceItem';

const getCustomCSSForWordsToChooseFromBasedOnType = (type) => {
    switch(type) {
        case ANIMAL_TYPE:
            return 'mt-12 m-20';
        case FOOD_TYPE:
            return 'mt-10 mx-72';
        default:
            return '';
    }
}

const SquareChoiceItems = ({ items, type, amountToShowAtOneTimeRef, handleCompleteRoundCallback }) => (
    <div className={`${getCustomCSSForWordsToChooseFromBasedOnType(type)} grid cursor-pointer grid-cols-${amountToShowAtOneTimeRef.current} gap-x-7`}>
        {items.map(item => (
            <SquareChoiceItem
                key={item} 
                item={item}
                type={type}
                handleCompleteRoundCallback={handleCompleteRoundCallback}
            />
        ))}
    </div>
);

export default SquareChoiceItems;