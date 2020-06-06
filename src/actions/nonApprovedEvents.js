import {
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT,
    SET_CURRENT_HANDLED_NON_APPROVED_EVENT_ID
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const getNonApprovedEvents = () => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.get(),
        label: "getNonApprovedEvents",
        onSuccess: setNonApprovedEvents,
        onFailure: () => console.log("Error when fetching non approved events")
    });
};

export const getNonApprovedEventsCount = () => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.getCount(),
        label: "getNonApprovedEventsCount",
        onSuccess: setNonApprovedEventsCount,
        onFailure: () => console.log("Error when fetching non approved events count")
    });
};

export const approveEvent = (eventApproval, onSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.approve(),
        method: "PUT",
        label: "approveEvent",
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