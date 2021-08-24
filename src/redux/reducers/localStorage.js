import {
    GET_LOCAL_STORAGE_DATA,
    GET_MAIN_WORD_DATA,
    GET_SOCIAL_WORD_DATA
} from "../actions/types";

const INITIAL_STATE = {
    date: "", // date last saved
    parentCode: "0000", // code to access parent dashboard. Can be letters and numbers.
    starsEarned: 0, // earn stars when completing tasks / understanding words
    masteredWords: {
        colors: [],
        animals: [],
        numbers: [],
        food: [],
        social: []
    },
    colors: {       
     "green": {
        "images": [{
            "id": "FNs_ylOm21g",
            "altText": "green house roof under blue sky",
            "sizeUrls": {
                "raw": "https://images.unsplash.com/photo-1512977851705-67ee4bf294f4?ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwxfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1",
                "full": "https://images.unsplash.com/photo-1512977851705-67ee4bf294f4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwxfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=85",
                "regular": "https://images.unsplash.com/photo-1512977851705-67ee4bf294f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwxfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1512977851705-67ee4bf294f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwxfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1512977851705-67ee4bf294f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwxfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=200"
            },
            "credits": {
                "name": "Simone Hutsch",
                "profileLink": "https://unsplash.com/@heysupersimi",
                "imageLink": "https://unsplash.com/photos/FNs_ylOm21g"
            }
        }, {
            "id": "8mCLDPE87Dw",
            "altText": "aerial view of boat on sea during daytime",
            "sizeUrls": {
                "raw": "https://images.unsplash.com/photo-1596324121712-5bbc14482174?ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwyfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1",
                "full": "https://images.unsplash.com/photo-1596324121712-5bbc14482174?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwyfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=85",
                "regular": "https://images.unsplash.com/photo-1596324121712-5bbc14482174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwyfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1596324121712-5bbc14482174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwyfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1596324121712-5bbc14482174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwyfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=200"
            },
            "credits": {
                "name": "Tracey Isles",
                "profileLink": "https://unsplash.com/@mermaid_28",
                "imageLink": "https://unsplash.com/photos/8mCLDPE87Dw"
            }
        }, {
            "id": "_mUVHhvBYZ0",
            "altText": "green leaf on white background",
            "sizeUrls": {
                "raw": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwzfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1",
                "full": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwzfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=85",
                "regular": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwzfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwzfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1587334274328-64186a80aeee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHwzfHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=200"
            },
            "credits": {
                "name": "Mockup Graphics",
                "profileLink": "https://unsplash.com/@mockupgraphics",
                "imageLink": "https://unsplash.com/photos/_mUVHhvBYZ0"
            }
        }, {
            "id": "FNZodrdjvYo",
            "altText": "Fire Exit signage",
            "sizeUrls": {
                "raw": "https://images.unsplash.com/photo-1547585129-30a2ef26f034?ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw0fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1",
                "full": "https://images.unsplash.com/photo-1547585129-30a2ef26f034?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw0fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=85",
                "regular": "https://images.unsplash.com/photo-1547585129-30a2ef26f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw0fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1547585129-30a2ef26f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw0fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1547585129-30a2ef26f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw0fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=200"
            },
            "credits": {
                "name": "Michael Schiffer",
                "profileLink": "https://unsplash.com/@michael_schiffer_design",
                "imageLink": "https://unsplash.com/photos/FNZodrdjvYo"
            }
        }, {
            "id": "6vSmbnbR0SE",
            "altText": "person standing on seashore under green sky with stars during night time",
            "sizeUrls": {
                "raw": "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw1fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1",
                "full": "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw1fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=85",
                "regular": "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw1fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw1fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1583483547183-d9c10c10f044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTQ0NTB8MHwxfHNlYXJjaHw1fHxncmVlbnxlbnwxfDJ8fHwxNjI5NjY4NTI1&ixlib=rb-1.2.1&q=80&w=200"
            },
            "credits": {
                "name": "Valdemaras D.",
                "profileLink": "https://unsplash.com/@deko_lt",
                "imageLink": "https://unsplash.com/photos/6vSmbnbR0SE"
            }
        }],
        "audio": ["ssl.gstatic.com/dictionary/static/sounds/20200429/green--1_gb_1.mp3"]
    }},
    animals: {},
    numbers: {},
    food: {},
    social: {}
} 

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case GET_LOCAL_STORAGE_DATA:
            return { ...state, ...payload };
        case GET_MAIN_WORD_DATA:
            return {
                ...state,
                [payload.wordType]: {
                    ...state[payload.wordType],
                    [payload.word]: {
                        images: payload.imageData,
                        audio: payload.audioData
                    }
                }
            };
        case GET_SOCIAL_WORD_DATA:
            return {
                ...state,
                social: {
                    ...state.social,
                    ...payload
                }
            };
        default:
            return state;
    }
};