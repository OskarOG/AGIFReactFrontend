import {
    SET_IS_MENU_OPEN
} from "../constants/actionTypes";

export const openMenu = () => {
    return {
        type: SET_IS_MENU_OPEN,
        payload: true
    };
};

export const closeMenu = () => {
    return {
        type: SET_IS_MENU_OPEN,
        payload: false
    };
};