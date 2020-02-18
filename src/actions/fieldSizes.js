import {
    GET_FIELD_SIZES,
    SET_FIELD_SIZES
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const getFieldSizes = (fieldId, timeFrom, timeTo) => {
    return apiAction({
        url: ApiUrlFactory.fields.getFieldSizes(fieldId, timeFrom, timeTo),
        label: GET_FIELD_SIZES,
        onSuccess: setFieldSizes,
        onFailure: () => console.log("Error when getting field sizes")
    });
};


export const setFieldSizes = fieldSizes => {
    return {
        type: SET_FIELD_SIZES,
        payload: fieldSizes
    };
};