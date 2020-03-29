import ApiUrlFactory from "../factories/ApiUrlFactory";

import {
    SET_EVENTS
} from "../constants/actionTypes";

import {
    apiAction
} from "./api";


export const getEventsBetweenDates = (startDate, endDate) => {
    return apiAction({
        url: ApiUrlFactory.events.getForWeek(startDate, endDate),
        label: "getEventsBetweenDates",
        onSuccess: setEvents,
        onFailure: () => console.log("Error when fetching events")
    });
};

export const postEvent = (
    name,
    email,
    club,
    team,
    timeFrom,
    timeTo,
    recurringEventEnd,
    comment,
    eventColor,
    fieldId,
    fieldSizeId,
    changingRoomId,
    changingRoomTimeFrom,
    changingRoomTimeTo
) => {
    return apiAction({
        url: ApiUrlFactory.events.postEvent(),
        method: "POST",
        label: "postEvent",
        data: {
            Name: name,
            Email: email,
            Club: club,
            Team: team,
            TimeFrom: timeFrom,
            TimeTo: timeTo,
            RecurringEventEnd: recurringEventEnd,
            Comment: comment,
            EventColor: eventColor,
            FieldID: fieldId,
            FieldSizeID: fieldSizeId,
            ChangingRoomID: changingRoomId,
            ChangingRoomTimeFrom: changingRoomTimeFrom,
            ChangingRoomTimeTo: changingRoomTimeTo
        },
        onSuccess: () => {
            console.log("TODO: fetch events");
            return {
                type: "",
                payload: null
            };
        },
        onFailure: () => console.log("Error when posting event")
    });
};

export const updateEvent = (event) => {
    return apiAction({
        url: ApiUrlFactory.events.updateEvent(),
        method: "PUT",
        label: "updateEvent",
        data: event,
        onSuccess: () => {
            console.log("TODO: fetch events");
            return {
                type: "",
                payload: null
            };
        },
        onFailure: () => console.log("Error when updating event")
    });
};

export const deleteEvent = (id, userKey) => {
    return apiAction({
        url: ApiUrlFactory.events.deleteEvent(id, userKey),
        method: "DELETE",
        label: "deleteEvent",
        onSuccess: () => {
            console.log("TODO: fetch events");
            return {
                type: "",
                payload: null
            };
        },
        onFailure: () => console.log("Error when deleting event")
    });
};

export const setEvents = (data) => {
    return {
        type: SET_EVENTS,
        payload: data
    };
};
