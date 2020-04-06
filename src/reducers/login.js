import {
    SET_IS_SIGNED_IN,
    SET_USER_KEY
} from "../constants/actionTypes";

import {
    AGIFBOOKING_USER_KEY
} from "../constants/sessionKeys";

export default function (state = {
    isSignedIn: sessionStorage.getItem(AGIFBOOKING_USER_KEY) ?? false,
    userKey: sessionStorage.getItem(AGIFBOOKING_USER_KEY) ?? ""
}, action) {
    switch (action.type) {
        case SET_IS_SIGNED_IN:
            console.log(SET_IS_SIGNED_IN);
            return {
                ...state,
                isSignedIn: action.payload
            };

        case SET_USER_KEY:
            console.log(SET_USER_KEY);
            return {
                ...state,
                userKey: action.payload
            };
    };
    return state;
};
