import axios from "axios";
import { API } from "../constants/actionTypes";
import { AGIFBOOKING_USER_KEY } from "../constants/sessionKeys";
import { apiStart, apiEnd, apiError, apiDenied } from "../actions/api";
import { apiErrorMessage } from "../actions/messages";

const apiMiddleware = ({dispatch}) => next => action => {
    if (action.type !== API) {
        next(action);
        return;
    }

    const {
        url,
        method,
        data,
        label,
        onSuccess,
        onFailure
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://172.28.232.152/api" : "/api";
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const userKey = sessionStorage.getItem(AGIFBOOKING_USER_KEY);
    if (userKey !== null) {
        axios.defaults.headers.common["Authorization"] = `AgifAuth ${userKey}`;
    }
    
    if (label) {
        dispatch(apiStart(label));
    }

    axios({
        url,
        method,
        [dataOrParams]: data
    })
    .then(({data: result}) => {
        var reducerObject = onSuccess(result);
        if (reducerObject !== undefined) {
            dispatch(reducerObject);
        }
    })
    .catch(error => {
        dispatch(apiErrorMessage(label, error.response.status));
        dispatch(apiError(error));
        onFailure(error);

        if (error.response && error.response.status === 403) {
            dispatch(apiDenied(window.location.pathname));
        }
    })
    .finally(() => {
        if (label) {
            dispatch(apiEnd(label));
        }
    });
};

export default apiMiddleware;
