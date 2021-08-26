import React from "react";
import Confetti from "react-confetti";

const GameCompleteModal = ({ starsEarned = 0 }) => {
    return (
        <div className="min-h-full bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-3xl font-poppins font-semibold">{`${"You did it!".toUpperCase()}`}</h1>
                            <span className="font-poppins text-2xl">You earned {starsEarned} stars!</span>
                        </div>
                        {/* <div className="relative">
                            <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCompleteModal;