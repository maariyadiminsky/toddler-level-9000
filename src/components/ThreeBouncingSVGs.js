import React from 'react';

import SVGBounce from './SVGBounce';
import SmileSVG from './Loader/svg/Smile';

const SVGType = (type, color = 'green') => {
    switch(type) {
        default:
            return SmileSVG(color);
    }
}
const ThreeBouncingSVGs = ({ data }) => (
    data.map(({ id, svgType, color, wrapperColor, bounceAmount }) => (
        <SVGBounce
            key={id}
            svg={SVGType(svgType, color)}
            color={wrapperColor}
            bounceAmount={bounceAmount}
        />
    ))
);

export default ThreeBouncingSVGs;