import {
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
        case SET_EVENTS:
            console.log(SET_EVENTS);
            return {
                ...state,
                events: action.payload
            };
    };
    return state;
};
