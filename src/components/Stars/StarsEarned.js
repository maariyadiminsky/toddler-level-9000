import React from "react";
import EmptyStar from "./svg/EmptyStar";

const FullStar = () => EmptyStar(20, true);
const StarsEarned = () => {
    const points = 100;
    return (
        <div className="flex justify-center flex-wrap content-center">
            <div>{FullStar(points)}</div>
            <div className="mt-3 font-poppins font-bold tracking-wide text-4xl text-blue-300">
                x <span className="underline inline-block align-middle">{points}</span>
            </div>
        </div>
    );
}

export default StarsEarned;