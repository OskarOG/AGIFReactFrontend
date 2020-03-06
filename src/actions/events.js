import {
    GET_EVENTS,
    POST_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    SET_EVENTS
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const getEventsBetweenDates = (startDate, endDate) => {
    return apiAction({
        url: ApiUrlFactory.events.getForWeek(startDate, endDate),
        label: GET_EVENTS,
        onSuccess: setEvents,
        onFailure: () => console.log("Error when fetching events")
    });
};

export const postEvent = (event) => {
    return apiAction({
        url: ApiUrlFactory.events.postEvent(),
        method: "POST",
        label: POST_EVENT,
        data: event,
        onSuccess: () => {
            console.log("TODO: fetch events");
        },
        onFailure: () => console.log("Error when posting event")
    });
};

export const updateEvent = (event) => {
    return apiAction({
        url: ApiUrlFactory.events.updateEvent(),
        method: "PUT",
        label: UPDATE_EVENT,
        data: event,
        onSuccess: () => {
            console.log("TODO: fetch events");
        },
        onFailure: () => console.log("Error when updating event")
    });
};

export const deleteEvent = (id, userKey) => {
    return apiAction({
        url: ApiUrlFactory.events.deleteEvent(id, userKey),
        method: "DELETE",
        label: DELETE_EVENT,
        onSuccess: () => {
            console.log("TODO: fetch events");
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