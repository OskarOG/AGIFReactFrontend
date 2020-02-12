import {
    GET_NON_APPROVED_EVENTS,
    GET_NON_APPROVED_EVENTS_COUNT,
    APPROVE_EVENT,
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT
} from "../constants/actionTypes";

export default function (state = {
    nonApprovedEvents: [],
    nonApprovedEventsCount: 0
}, action) {
    switch (action.type) {
        case GET_NON_APPROVED_EVENTS:
            console.log("GET_NON_APPROVED_EVENTS");
            break;

        case GET_NON_APPROVED_EVENTS_COUNT:
            console.log("GET_NON_APPROVED_EVENTS_COUNT");
            break;
        
        case APPROVE_EVENT:
            console.log("APPROVE_EVENT");
            break;

        case SET_NON_APPROVED_EVENTS:
            return {
                ...state,
                nonApprovedEvents: action.payload
            };

        case SET_NON_APPROVED_EVENTS_COUNT:
            return {
                ...state,
                nonApprovedEventsCount: action.payload
            };
    };
    return state;
};
