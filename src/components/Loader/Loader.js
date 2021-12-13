import React from 'react';

import { LOADER_DATA } from './data';

import ThreeBouncingSVGs from '../ThreeBouncingSVGs';

const Loader = () => (
    <div className="flex justify-center mt-12 h-96 flex-wrap content-center animate-pulse">
        <ThreeBouncingSVGs data = {LOADER_DATA} />
    </div>
);

export default Loader;