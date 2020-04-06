import {
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const getNonApprovedEvents = userKey => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.get(userKey),
        label: "getNonApprovedEvents",
        onSuccess: setNonApprovedEvents,
        onFailure: () => console.log("Error when fetching non approved events")
    });
};

export const getNonApprovedEventsCount = userKey => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.getCount(userKey),
        label: "getNonApprovedEventsCount",
        onSuccess: setNonApprovedEventsCount,
        onFailure: () => console.log("Error when fetching non approved events count")
    });
};

export const approveEvent = (userKey, events) => {
    return apiAction({
        url: ApiUrlFactory.nonApprovedEvents.approve(userKey),
        method: "PUT",
        label: "approveEvent",
        data: events,
        onSuccess: () => console.log("TODO: Events approved"),
        onFailure: () => console.log("Error when approving event")
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