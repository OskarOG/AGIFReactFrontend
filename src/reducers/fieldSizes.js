import {
    FETCH_FIELD_SIZES,
    FETCH_AVAILABLE_FIELD_SIZES
} from "../constants/actionTypes";

export default function (state = {
    fieldSizes: [],
    availableFieldSizes: []
}, action) {
    switch (action.type) {
        case FETCH_FIELD_SIZES:
            console.log(FETCH_FIELD_SIZES);
            break;
        
        case FETCH_AVAILABLE_FIELD_SIZES:
            console.log(FETCH_AVAILABLE_FIELD_SIZES);
            break;
    };
    return state;
};
