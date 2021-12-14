import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT } from '../const';

import SVGBounce from './SVGBounce';
import SmileSVG from './Loader/svg/Smile';

const SVGType = (type = DEFAULT.STRING, color = 'green') => {
    switch(type) {
        default:
            return SmileSVG(color);
    }
}
const ThreeBouncingSVGs = ({ data = DEFAULT.NULL }) => (
    data && data.map(({ id, svgType, color, wrapperColor, bounceAmount }) => (
        <SVGBounce
            key={id}
            svg={SVGType(svgType, color)}
            color={wrapperColor}
            bounceAmount={bounceAmount}
        />
    ))
);

ThreeBouncingSVGs.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            svgType: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            wrapperColor: PropTypes.string.isRequired,
            bounceAmount: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default ThreeBouncingSVGs;