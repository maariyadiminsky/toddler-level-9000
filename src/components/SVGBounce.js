import React from 'react';

const SVGBounce = ({ svg, color, bounceAmount = '' }) => (
    <div className={`h-10 w-10 m-6 mr-1 rounded-full bg-${color} animate-bounce${bounceAmount}`}>
        {svg}
    </div>
);

export default SVGBounce;