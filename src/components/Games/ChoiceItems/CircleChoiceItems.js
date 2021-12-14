import React from 'react';

import { DEFAULT } from '../../../const';

import CircleChoiceItem from './CircleChoiceItem';

const CircleChoiceItems = ({ items = DEFAULT.NULL, amountToShowAtOneTimeRef = DEFAULT.NULL, handleCompleteRoundCallback = DEFAULT.NULL, type = DEFAULT.STRING }) => (
    <div className={`mt-16 mx-72 cursor-pointer grid grid-cols-${amountToShowAtOneTimeRef.current} gap-x-10`}>
        {items && items.map((item = DEFAULT.STRING) => (
            <CircleChoiceItem 
                key={item}
                item={item}
                type={type}
                handleCompleteRoundCallback={handleCompleteRoundCallback}
            />
        ))}
    </div>
);

export default CircleChoiceItems;