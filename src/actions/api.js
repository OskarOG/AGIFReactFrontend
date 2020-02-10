import { API_START, API_END, API_DENIED, API_ERROR } from "../constants/actionTypes";

export const apiStart = lable => ({
    type: API_START,
    payload: lable
});

export const apiEnd = lable => ({
    type: API_END,
    payload: lable
});

export const apiDenied = lable => ({
    type: API_DENIED,
    payload: lable
});

export const apiError = lable => ({
    type: API_ERROR,
    payload: lable
});