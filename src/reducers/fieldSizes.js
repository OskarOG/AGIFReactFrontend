import {
    SET_AVAILABLE_FIELD_SIZES
} from "../constants/actionTypes";

export default function (state = {
    fieldSizes: [],
    availableFieldSizes: []
}, action) {
    switch (action.type) {
        case SET_AVAILABLE_FIELD_SIZES:
            console.log(SET_AVAILABLE_FIELD_SIZES);
            return {
                ...state,
                availableFieldSizes: action.payload
            };
    };
    return state;
};
