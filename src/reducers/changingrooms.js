import {
    SET_CHANGINGROOMS,
    SET_AVAILABLE_CHANGINGROOMS
} from "../constants/actionTypes";

export default function(state = {
    changingrooms: [],
    availableChangingRooms: []
}, action) {
    switch (action.type) {
        case SET_CHANGINGROOMS:
            return {
                ...state,
                changingrooms: action.payload
            };

        case SET_AVAILABLE_CHANGINGROOMS:
            return {
                ...state,
                availableChangingRooms: action.payload
            };
    };
    return state;
};