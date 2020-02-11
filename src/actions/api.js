import { API_START, API_END, API_DENIED, API_ERROR } from "../constants/actionTypes";

export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const apiDenied = label => ({
    type: API_DENIED,
    payload: label
});

export const apiError = label => ({
    type: API_ERROR,
    payload: label
});