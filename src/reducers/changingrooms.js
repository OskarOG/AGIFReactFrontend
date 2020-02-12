import { 
    GET_ALL_CHANGINGROOMS,
    GET_CHANGINGROOMS_INBETWEEN,
    SET_CHANGINGROOMS
} from "../constants/actionTypes";

export default function(state = {
    changingrooms: []
}, action) {
    switch (action.type) {
        case GET_ALL_CHANGINGROOMS:
            console.log("GET_ALL_CHANGINGROOMS");
            break;

        case GET_CHANGINGROOMS_INBETWEEN:
            console.log("GET_CHANGINGROOMS_INBETWEEN");
            break;

        case SET_CHANGINGROOMS:
            return {
                ...state,
                changingrooms: action.payload
            };
    };
    return state;
};