import React, { useState } from 'react';

import { DEFAULT } from '../../const';

import Arrow from './svg/Arrow';

const shouldDisableButtonAnimationCSS = (disable = DEFAULT.BOOL_FALSE) => disable ? 'none' : 'pulse';
const StartGameButton = ({ handleButtonClick = DEFAULT.NULL }) => {
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setDisable(true);

        handleButtonClick();
    }

    return (
        <div className={`flex justify-center mt-32 h-96 flex-wrap content-center animate-${shouldDisableButtonAnimationCSS(disable)} disabled:animate-none`}>
            <button  
                onClick={handleClick} 
                disabled={disable}
                className="m-auto flex justify-center items-center content-center h-28 w-96 rounded-2xl fill-current bg-gradient-to-br from-blue-400 to-green-500 text-white text-2xl font-poppins  shadow-lg hover:shadow-2xl"
            >
                <Arrow />
            </button>
        </div>
    );
}

export default StartGameButton;