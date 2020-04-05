import {
    SET_EVENTS
} from "../constants/actionTypes";

export default function (state = {
    events: [],
    selectedEvent: {}
}, action) {
    switch (action.type) {
        case SET_EVENTS:
            console.log(SET_EVENTS);

            action.payload.forEach(e => {
                e.TimeFrom = new Date(`${e.TimeFrom}Z`);
                e.TimeTo = new Date(`${e.TimeTo}Z`);
                if (e.ChangingRoomTimeFrom !== null && e.ChangingRoomTimeTo !== null) {
                    e.ChangingRoomTimeFrom = new Date(`${e.ChangingRoomTimeFrom}Z`);
                    e.ChangingRoomTimeTo = new Date(`${e.ChangingRoomTimeTo}Z`);
                }
            });

            return {
                ...state,
                events: action.payload
            };
    };
    return state;
};
