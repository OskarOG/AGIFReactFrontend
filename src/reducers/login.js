import {
    SIGN_IN,
    SIGN_OUT,
    SET_IS_SIGNED_IN,
    SET_USER_KEY
} from "../constants/actionTypes";

export default function (state = {
    isSignedIn: false,
    userKey: ""
}, action) {
    switch (action.type) {
        case SIGN_IN:
            console.log(SIGN_IN);
            break;

        case SIGN_OUT:
            console.log(SIGN_OUT);
            break;

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
