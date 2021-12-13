import React from 'react';

import CircleChoiceItem from './CircleChoiceItem';

const CircleChoiceItems = ({ items, amountToShowAtOneTimeRef, handleCompleteRoundCallback, type }) => (
    <div className={`mt-16 mx-72 cursor-pointer grid grid-cols-${amountToShowAtOneTimeRef.current} gap-x-10`}>
        {items.map(item => (
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