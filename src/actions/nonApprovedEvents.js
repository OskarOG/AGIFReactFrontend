import {
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT,
    SET_CURRENT_HANDLED_NON_APPROVED_EVENT_ID,
    REMOVE_HANDLED_NON_APPROVED_EVENT
} from "../constants/actionTypes";
import {
    GET_NON_APPROVED_EVENTS_LABEL,
    GET_NON_APPROVED_EVENTS_COUNT_LABEL,
    APPROVE_EVENT
} from "../constants/apiLabelConstants";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";


export const getNonApprovedEvents = () => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.get(),
        label: GET_NON_APPROVED_EVENTS_LABEL,
        onSuccess: setNonApprovedEvents,
        onFailure: () => console.log("Error when fetching non approved events")
    });
};

export const getNonApprovedEventsCount = () => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.getCount(),
        label: GET_NON_APPROVED_EVENTS_COUNT_LABEL,
        onSuccess: setNonApprovedEventsCount,
        onFailure: () => console.log("Error when fetching non approved events count")
    });
};

export const approveEvent = (eventApproval, onSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.approve(),
        method: "PUT",
        label: APPROVE_EVENT,
        data: eventApproval,
        onSuccess: onSuccess,
        onFailure: onFailure
    });
};

export const setNonApprovedEventsCount = count => {
    return {
        type: SET_NON_APPROVED_EVENTS_COUNT,
        payload: count
    };
};

export const setNonApprovedEvents = nonapprovedEvents => {
    return {
        type: SET_NON_APPROVED_EVENTS,
        payload: nonapprovedEvents
    };
};

export const setCurrentHandledNonApprovedEventId = eventId => {
    return {
        type: SET_CURRENT_HANDLED_NON_APPROVED_EVENT_ID,
        payload: eventId
    };
};

export const removeHandledNonApprovedEvent = eventId => {
    return {
        type: REMOVE_HANDLED_NON_APPROVED_EVENT,
        payload: eventId
    };
};