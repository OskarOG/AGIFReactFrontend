import {
    FETCH_FIELDS,
    FETCH_AVAILABLE_FIELDS
} from "../constants/actionTypes";

export default function (state = {
    fields: [
        {
            Id: 1, Name: "Plan 1 - 11 man", MaxSize: 11
        },
        {
            Id: 2, Name: "Plan 2 - 7 man", MaxSize: 7
        }
    ],
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
