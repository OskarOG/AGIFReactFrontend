import {
    GET_ALL_CHANGINGROOMS,
    GET_CHANGINGROOMS_INBETWEEN,
    SET_CHANGINGROOMS,
    SET_AVAILABLE_CHANGINGROOMS
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const getAllChangingrooms = () => {
    return apiAction({
        url: ApiUrlFactory.changingRooms.getAll(),
        label: GET_ALL_CHANGINGROOMS,
        onSuccess: setChangingrooms,
        onFailure: () => console.log("Error when fetching all changingrooms")
    });
};

export const getChangingroomsInbetween = (timeFrom, timeTo) => {
    return apiAction({
        url: ApiUrlFactory.changingRooms.get(timeFrom, timeTo),
        label: GET_CHANGINGROOMS_INBETWEEN,
        onSuccess: setAvailableChangingrooms,
        onFailure: () => console.log("Error when fetching changingrooms")
    });
};

export const clearAvailableChangingrooms = () => {
    return setAvailableChangingrooms([]);
};

export const setAvailableChangingrooms = changingrooms => {
    return {
        type: SET_AVAILABLE_CHANGINGROOMS,
        payload: changingrooms
    }
};

export const setChangingrooms = changingrooms => {
    return {
        type: SET_CHANGINGROOMS,
        payload: changingrooms
    }
};