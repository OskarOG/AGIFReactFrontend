import {
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT
} from "../constants/actionTypes";

export default function (state = {
    nonApprovedEvents: [],
    nonApprovedEventsCount: 0
}, action) {
    switch (action.type) {
        case SET_NON_APPROVED_EVENTS:
            console.log(SET_NON_APPROVED_EVENTS);
            return {
                ...state,
                nonApprovedEvents: action.payload
            };

        case SET_NON_APPROVED_EVENTS_COUNT:
            console.log(SET_NON_APPROVED_EVENTS_COUNT);
            return {
                ...state,
                nonApprovedEventsCount: action.payload
            };
    };
    return state;
};
