import axios from "axios";
import { API } from "../constants/actionTypes";
import { apiStart, apiEnd, apiError, apiDenied } from "../actions/api";

const apiMiddleware = ({dispatch}) => next => action => {
    if (action.type !== API) {
        next(action);
        return;
    };

    const {
        url,
        method,
        data,
        accessToken,
        label,
        onSuccess,
        onFailure
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "https://localhost:44387/api" : "/api";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    if (label) {
        dispatch(apiStart(label));
    };

    axios.request({
        url,
        method,
        [dataOrParams]: data
    })
    .then(({data}) => {
        dispatch(onSuccess(data));
    })
    .catch(error => {
        dispatch(apiError(error));
        onFailure(error);

        if (error.response && error.response.status === 403) {
            dispatch(apiDenied(window.location.pathname));
        };
    })
    .finally(() => {
        if (label) {
            dispatch(apiEnd(label));
        }
    });
};

export default apiMiddleware;
