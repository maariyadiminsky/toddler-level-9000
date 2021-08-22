// auth
export const AUTH0_AUDIENCE = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`;
export const AUTH0_SCOPE = "read:current_user";
export const AUTH0_REDIRECT_URI_AFTER_LOGIN = `${window.location.origin}/parents`;

// word types
export const COLOR_TYPE = "colors";
export const ANIMAL_TYPE = "animals";
export const NUMBER_TYPE = "numbers";
export const FOOD_TYPE = "food";
export const SOCIAL_TYPE = "social";

export const SOCIAL_TYPE_FIRST = "firstTenWords";
export const SOCIAL_TYPE_SECOND = "secondTenWords";
export const SOCIAL_TYPE_THIRD = "thirdTenWords";

