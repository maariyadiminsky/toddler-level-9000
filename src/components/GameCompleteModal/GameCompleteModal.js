import React, { Fragment, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Confetti from "react-confetti";

import { setStarsEarned } from "../../redux/actions/stars";
import { generateRandomItemInArray, wait } from "../../utils";
import { generateCompleteSoundEffect } from "../../utils/audio";

import catCelebrate from "./images/catCelebrate.png";
import catCool from "./images/catCool.png";
import catHappy from "./images/catHappy.png";
import catLove from "./images/catLove.png";

const celebrateImageOptions = [catCelebrate, catCool, catHappy, catLove];
const GameCompleteModal = ({ starsEarned = 0, gameCompleteAudio }) => {
    const celebrateImage = useRef(generateRandomItemInArray(celebrateImageOptions));
    const celebrateSoundEffect = useRef(new Audio(generateCompleteSoundEffect()));

    const dispatch = useDispatch();

    console.log(gameCompleteAudio, celebrateSoundEffect.current);
    useEffect(() => {
        if (starsEarned > 0) {
            dispatch(setStarsEarned(starsEarned));

            gameCompleteAudio && gameCompleteAudio.play();
            celebrateSoundEffect.current && celebrateSoundEffect.current.play();
        }

    }, [dispatch, starsEarned]);

    return (
        <Fragment>
            <Confetti 
                tweenDuration={1} 
                numberOfPieces={500}
                opacity={0.5}
            />
            <div className="flex flex-col justify-center sm:pt-8">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
                    <div className="relative px-5 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="font-poppins font-semibold text-center text-6xl mb-3 text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-600">{`${"You did it!".toUpperCase()}`}</h1>
                                <div className="font-poppins text-center text-3xl pb-3">
                                    You earned <span className="font-semibold text-yellow-300">{starsEarned} stars!</span>
                                    </div>
                                <img 
                                    className="min-w-full" 
                                    src={celebrateImage.current} 
                                    alt="cat with funny expression"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GameCompleteModal;