import React, { useState } from "react";

const StartGameButton = ({ handleButtonClick }) => {
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setDisable(true);

        handleButtonClick();
    }
    return (
        <div className={`flex justify-center mt-12 h-96 flex-wrap content-center animate-${disable ? "none" : "pulse"} disabled:animate-none`}>
            <button  
                onClick={handleClick} 
                disabled={disable}
                className="m-auto flex justify-center items-center content-center h-28 w-96 rounded-2xl fill-current bg-gradient-to-br from-blue-400 to-green-500 text-white text-2xl font-poppins  shadow-lg hover:shadow-2xl"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="flex justify-center h-16 w-16 text-opacity-75" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                    />
                </svg>
            </button>
        </div>
    );
}

export default StartGameButton;