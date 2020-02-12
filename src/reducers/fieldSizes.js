import {
    GET_FIELD_SIZES,
    SET_FIELD_SIZES
} from "../constants/actionTypes";

export default function (state = {
    fieldSizes: []
}, action) {
    switch (action.type) {
        case GET_FIELD_SIZES:
            console.log("GET_FIELD_SIZES");
            break;
        
        case SET_FIELD_SIZES:
            return {
                ...state,
                fieldSizes: action.payload
            }
    };
    return state;
};
