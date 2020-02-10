import { API, FETCH_EVENTS, SET_EVENTS } from "../constants/actionTypes";
import ApiUrls from "../helpers/ApiUrls";

export const fetchEvents = (startDate, endDate) => {
    return apiAction({
        url: ApiUrls.events().getForWeek(startDate, endDate),
        lable: FETCH_EVENTS,
        onSuccess: setEvents,
        onFailure: () => console.log("Error when fetching events")
    });
};

export const setEvents = (data) => {
    return {
        type: SET_EVENTS,
        payload: data.data
    };
};


function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => null,
    onFailure = () => null,
    lable = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            lable,
            headersOverride
        }
    };
};
