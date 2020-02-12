import { 
    GET_NON_APPROVED_EVENTS,
    GET_NON_APPROVED_EVENTS_COUNT,
    APPROVE_EVENT,
    SET_NON_APPROVED_EVENTS,
    SET_NON_APPROVED_EVENTS_COUNT
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrls from "../helpers/ApiUrls";

export const getNonApprovedEvents = userKey => {
    return apiAction({
        url: ApiUrls.nonApprovedEvents.get(userKey),
        label: GET_NON_APPROVED_EVENTS,
        onSuccess: setNonApprovedEvents,
        onFailure: () => console.log("Error when fetching non approved events")
    });
};

export const getNonApprovedEventsCount = userKey => {
    return apiAction({
        url: ApiUrls.nonApprovedEvents.getCount(userKey),
        label: GET_NON_APPROVED_EVENTS_COUNT,
        onSuccess: setNonApprovedEventsCount,
        onFailure: () => console.log("Error when fetching non approved events count")
    });
};

export const approveEvent = (userKey, events) => {
    return apiAction({
        url: ApiUrls.nonApprovedEvents.approve(userKey),
        method: "PUT",
        label: APPROVE_EVENT,
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