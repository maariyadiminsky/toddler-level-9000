import React from 'react';

import SVGBounce from '../SVGBounce';
import SmileSVG from './svg/Smile';
import { LOADER_DATA } from './data';


const Loader = () => {
    const renderBouncingSVGs = () => LOADER_DATA.map(({ id, color, wrapperColor, bounceAmount }) => (
        <SVGBounce
            key={id}
            svg={SmileSVG(color)}
            color={wrapperColor}
            bounceAmount={bounceAmount}
        />
    ));

    return (
        <div className="flex justify-center mt-12 h-96 flex-wrap content-center animate-pulse">
            {renderBouncingSVGs()}
        </div>
    );
};

export default Loader;