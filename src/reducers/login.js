import {
    SET_IS_SIGNED_IN,
} from "../constants/actionTypes";

import {
    AGIFBOOKING_USER_KEY
} from "../constants/sessionKeys";

export default function (state = {
    isSignedIn: sessionStorage.getItem(AGIFBOOKING_USER_KEY) ?? false,
}, action) {
    switch (action.type) {
        case SET_IS_SIGNED_IN:
            console.log(SET_IS_SIGNED_IN);
            return {
                ...state,
                isSignedIn: action.payload
            };
    };
    return state;
};
