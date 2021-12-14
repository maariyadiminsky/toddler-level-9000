import React from 'react';

import { DEFAULT } from '../const';

const SVGBounce = ({ svg = DEFAULT.NULL, color = DEFAULT.STRING, bounceAmount = DEFAULT.STRING }) => (
    <div className={`h-10 w-10 m-6 mr-1 rounded-full bg-${color} animate-bounce${bounceAmount}`}>
        {svg}
    </div>
);

export default SVGBounce;