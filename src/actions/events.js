import ApiUrlFactory from "../factories/ApiUrlFactory";

import {
    SET_EVENTS,
    SET_SELECTED_EVENT
} from "../constants/actionTypes";
import {
    DELETE_EVENT_LABEL,
    GET_EVENTS_BETWEEN_DATES_LABEL,
    POST_EVENT_LABEL,
    UPDATE_EVENT_LABEL
} from "../constants/apiLabelConstants";

import {
    apiAction
} from "./api";

import {
    closeNewEventModal, closeAlterEventModal
} from "./modals";

export const getEventsBetweenDates = (startDate, endDate) => {
    return apiAction({
        url: ApiUrlFactory.events.getForWeek(startDate, endDate),
        label: GET_EVENTS_BETWEEN_DATES_LABEL,
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
    date,
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
        label: POST_EVENT_LABEL,
        data: {
            Name: name,
            Email: email,
            Club: club,
            Team: team,
            TimeFrom: new Date(`${date} ${timeFrom}`).getUnixTimestamp(),
            TimeTo: new Date(`${date} ${timeTo}`).getUnixTimestamp(),
            RecurringEventEnd: new Date(recurringEventEnd).getUnixTimestamp(),
            Comment: comment,
            EventColor: eventColor,
            FieldID: fieldId,
            FieldSizeID: fieldSizeId,
            ChangingRoomID: changingRoomId,
            ChangingRoomTimeFrom: new Date(`${date} ${changingRoomTimeFrom}`).getUnixTimestamp(),
            ChangingRoomTimeTo: new Date(`${date} ${changingRoomTimeTo}`).getUnixTimestamp()
        },
        onSuccess: () => closeNewEventModal(),
        onFailure: () => console.log("Error when posting event")
    });
};

export const updateEvent = (
    id,
    name,
    email,
    club,
    team,
    timeFrom,
    timeTo,
    date,
    comment,
    eventColor,
    fieldId,
    fieldSizeId,
    changingRoomId,
    changingRoomTimeFrom,
    changingRoomTimeTo
) => {
    return apiAction({
        url: ApiUrlFactory.events.updateEvent(),
        method: "PUT",
        label: UPDATE_EVENT_LABEL,
        data: {
            Id: id,
            Name: name,
            Email: email,
            Club: club,
            Team: team,
            TimeFrom: new Date(`${date} ${timeFrom}`).getUnixTimestamp(),
            TimeTo: new Date(`${date} ${timeTo}`).getUnixTimestamp(),
            Comment: comment,
            EventColor: eventColor,
            FieldID: fieldId,
            FieldSizeID: fieldSizeId,
            ChangingRoomID: changingRoomId,
            ChangingRoomTimeFrom: new Date(`${date} ${changingRoomTimeFrom}`).getUnixTimestamp(),
            ChangingRoomTimeTo: new Date(`${date} ${changingRoomTimeTo}`).getUnixTimestamp()
        },
        onSuccess: () => closeAlterEventModal(),
        onFailure: () => console.log("Error when updating event")
    });
};

export const deleteEvent = (id) => {
    return apiAction({
        url: ApiUrlFactory.events.deleteEvent(id),
        method: "DELETE",
        label: DELETE_EVENT_LABEL,
        onSuccess: () => closeAlterEventModal(),
        onFailure: () => console.log("Error when deleting event")
    });
};

export const setEvents = (data) => {
    return {
        type: SET_EVENTS,
        payload: data
    };
};

export const setSelectedEvent = event => {
    return {
        type: SET_SELECTED_EVENT,
        payload: event
    };
};