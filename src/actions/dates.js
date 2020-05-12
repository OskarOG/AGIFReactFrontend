import {
    SET_SELECTED_DATE
} from "../constants/actionTypes";

export const setSelectedDate = date => {
    return {
        type: SET_SELECTED_DATE,
        payload: date
    }
};