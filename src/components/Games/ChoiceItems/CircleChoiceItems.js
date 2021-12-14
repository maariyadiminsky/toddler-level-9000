import React from 'react';
import PropTypes from 'prop-types';

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

CircleChoiceItems.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCompleteRoundCallback: PropTypes.func.isRequired,
    amountToShowAtOneTimeRef: PropTypes.shape({
        current: PropTypes.number.isRequired
    }).isRequired,
};

export default CircleChoiceItems;