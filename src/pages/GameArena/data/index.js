import apple from "../images/apple.png";
import count from "../images/count.png";
import bunny from "../images/bunny.png";
import colors from "../images/colors.png";
import talk from "../images/talk.png";
import match from "../images/match.png"
import face from "../images/face.png";
import basket from "../images/basket.png";
import fridge from "../images/fridge.png";

import { 
    COLOR_TYPE,
    ANIMAL_TYPE,
    NUMBER_TYPE,
    FOOD_TYPE,
    SOCIAL_TYPE,
    BODY_TYPE,

    MATCH_GAME,
    REFRIGERATOR_GAME,
    BASKET_GAME,

    CHOICE_GAME_PATH 
} from "../../../const";

export const gameArenaData = [
    {
        id: 0,
        imageUrl: talk,
        altText: "talk",
        customDivClass: "",
        customImgClass: "pt-7 w-96",
        link: CHOICE_GAME_PATH(SOCIAL_TYPE)
    },
    {
        id: 1,
        imageUrl: count,
        altText: "count",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(NUMBER_TYPE)
    },
    {
        id: 2,
        imageUrl: bunny,
        altText: "bunny",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(ANIMAL_TYPE)
    },
    {
        id: 3,
        imageUrl: match,
        altText: "match",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(MATCH_GAME)
    },    
    {
        id: 4,
        imageUrl: colors,
        altText: "colors",
        customDivClass: "",
        customImgClass: "w-80",
        link: CHOICE_GAME_PATH(COLOR_TYPE)
    },
    {
        id: 5,
        imageUrl: apple,
        altText: "apple",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(FOOD_TYPE)
    },
    {
        id: 6,
        imageUrl: basket,
        altText: "basket",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(BASKET_GAME)
    },
    {
        id: 7,
        imageUrl: fridge,
        altText: "fridge",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(REFRIGERATOR_GAME)
    },
    {
        id: 8,
        imageUrl: face,
        altText: "face",
        customDivClass: "",
        customImgClass: "",
        link: CHOICE_GAME_PATH(BODY_TYPE)
    }
];