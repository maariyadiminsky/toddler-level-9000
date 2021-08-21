import { SET_USER_ID } from "./types";

// todo: setup auth later with Google Auth or 0Auth.

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    payload: userId.includes("|") ? userId.split("|").pop() : userId
});