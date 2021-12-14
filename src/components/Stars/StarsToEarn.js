import React from 'react';

import { DEFAULT } from '../../const';

import EmptyStar from './svg/EmptyStar';

const STAR_SIZE = 20;
const FullStar = (i = DEFAULT.NULL) => EmptyStar(STAR_SIZE, true, i);
const StarsToEarn = ({ starsTotal = 0, emptyStars = 0 }) => {
    const findFullStarAmount = () => starsTotal - emptyStars;

    const renderStars = () => {
        let stars = []
        const fullStarAmount = findFullStarAmount();
        let currentFullStarAmount = 0;

        for (var i = 0; i < starsTotal; i++) {
            if (currentFullStarAmount === fullStarAmount) {
                stars.push(<div key={i}>{EmptyStar(STAR_SIZE, false, i, false)}</div>);
            } else {
                stars.push(<div key={i}>{FullStar(i)}</div>);

                currentFullStarAmount++;
            }
        }

        return stars;
    }

    return (
        <div className="pb-10 flex justify-center flex-wrap">
            {renderStars()}
        </div>
    );
}

export default StarsToEarn;