import {
    SET_IS_MENU_OPEN
} from "../constants/actionTypes";

export default function (state = {
    isMenuOpen: false
}, action) {
    switch (action.type) {
        case SET_IS_MENU_OPEN:
            console.log(SET_IS_MENU_OPEN);
            return {
                ...state,
                isMenuOpen: action.payload
            };
    };
    return state;
};
