import {
    SIGN_IN,
    SIGN_OUT,
    SET_IS_SIGNED_IN
} from "../constants/actionTypes";

export default function (state = {
    isSignedIn: false
}, action) {
    switch (action.type) {
        case SIGN_IN:
            console.log("SIGN_IN");
            break;

        case SIGN_OUT:
            console.log("SIGN_OUT");
            break;

        case SET_IS_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.payload
            };
    };
    return state;
};
