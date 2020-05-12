import { 
    FETCH_CHANGINGROOMS,
    FETCH_AVAILABLE_CHANGINGROOMS,
    SET_CHANGINGROOMS,
    SET_AVAILABLE_CHANGINGROOMS
} from "../constants/actionTypes";

export default function(state = {
    changingrooms: [],
    availableChangingRooms: []
}, action) {
    switch (action.type) {
        case FETCH_CHANGINGROOMS:
            console.log(FETCH_CHANGINGROOMS);
            break;

        case FETCH_AVAILABLE_CHANGINGROOMS:
            console.log(FETCH_AVAILABLE_CHANGINGROOMS);
            break;

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