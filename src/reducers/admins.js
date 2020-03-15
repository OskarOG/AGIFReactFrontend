import {
    SET_IS_ADMIN,
} from "../constants/actionTypes";

export default function (state = {
    isAdmin = false
}, action) {
    switch(action.type) {
        case SET_IS_ADMIN:
            console.log(SET_IS_ADMIN);
            return {
                ...state,
                isAdmin: action.payload
            };
    };

    return state;
};
