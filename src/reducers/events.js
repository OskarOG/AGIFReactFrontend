import { 
    GET_EVENTS,
    POST_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    SET_EVENTS
} from "../constants/actionTypes";

export default function (state = {
    events: [],
    selectedEvent: {}
}, action) {
    switch (action.type) {
        case GET_EVENTS:
            console.log("GET_EVENTS");
            break;
        
        case POST_EVENT:
            console.log("POST_EVENT");
            break;
        
        case UPDATE_EVENT:
            console.log("UPDATE_EVENT");
            break;

        case DELETE_EVENT:
            console.log("DELETE_EVENT");
            break;

        case SET_EVENTS:
            return {
                ...state,
                events: action.payload
            };
    };
    return state;
};
