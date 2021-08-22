import React from "react";

import apple from "./apple.png";
import count from "./count.png";
import bunny from "./bunny.png";
import colors from "./colors.png";
import talk from "./talk.png";
import match from "./match.png"
import face from "./face.png";
import basket from "./basket.png";
import fridge from "./fridge.png";

const GameArena = () => {
    return (
        <div className="container my-16">
            <div className="grid grid-cols-3 gap-y-5 gap-x-7">
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img className="m-auto pt-7 w-96" src={talk} alt="talk" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img src={count} alt="count" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img src={bunny} alt="bunny" />
                </div>
                <div className=" p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img src={match} alt="match" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img className="mx-auto w-80" src={colors} alt="colors" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img src={apple} alt="apple" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img className="mx-auto" src={basket} alt="basket" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img className="mx-auto" src={fridge} alt="fridge" />
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <img className="mx-auto w-96" src={face} alt="face" />
                </div>
            </div>
        </div>
    );
};

export default GameArena;