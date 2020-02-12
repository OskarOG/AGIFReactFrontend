import {
    GET_ALL_CHANGINGROOMS,
    GET_CHANGINGROOMS_INBETWEEN,
    SET_CHANGINGROOMS
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrls from "../helpers/ApiUrls";

export const getAllChangingrooms = () => {
    return apiAction({
        url: ApiUrls.changingRooms.getAll(),
        label: GET_ALL_CHANGINGROOMS,
        onSuccess: setChangingrooms,
        onFailure: () => console.log("Error when fetching all changingrooms")
    });
};

export const getChangingroomsInbetween = (timeFrom, timeTo) => {
    return apiAction({
        url: ApiUrls.changingRooms.get(timeFrom, timeTo),
        label: GET_CHANGINGROOMS_INBETWEEN,
        onSuccess: setChangingrooms,
        onFailure: () => console.log("Error when fetching changingrooms")
    });
};


export const setChangingrooms = changingrooms => {
    return {
        type: SET_CHANGINGROOMS,
        payload: changingrooms
    }
};