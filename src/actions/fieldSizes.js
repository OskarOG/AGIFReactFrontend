import ApiUrlFactory from "../factories/ApiUrlFactory";

import {
    SET_AVAILABLE_FIELD_SIZES
} from "../constants/actionTypes";

import { apiAction } from "./api"
import { GET_AVAILABLE_FIELDSIZES_LABEL } from "../constants/apiLabelConstants";

export const getAvailableFieldSizes = (fieldId, timeFrom, timeTo) => {
    return apiAction({
        url: ApiUrlFactory.fields.getFieldSizes(fieldId, timeFrom, timeTo),
        label: GET_AVAILABLE_FIELDSIZES_LABEL,
        onSuccess: setFieldSizes,
        onFailure: () => console.log("Error when getting field sizes")
    });
};

export const clearAvailableFieldSizes = () => {
    return setFieldSizes([]);
};

export const setFieldSizes = fieldSizes => {
    return {
        type: SET_AVAILABLE_FIELD_SIZES,
        payload: fieldSizes
    };
};