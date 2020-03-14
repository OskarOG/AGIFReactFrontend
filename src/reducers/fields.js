import {
    FETCH_FIELDS,
    FETCH_AVAILABLE_FIELDS
} from "../constants/actionTypes";

export default function (state = {
    fields: [],
    availableFields: []
}, action) {
    switch (action.type) {
        case FETCH_FIELDS:
            console.log(FETCH_FIELDS);
            break;
        
        case FETCH_AVAILABLE_FIELDS:
            console.log(FETCH_AVAILABLE_FIELDS);
            break;
    };
    return state;
};
