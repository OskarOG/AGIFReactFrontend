import { createStore, applyMiddleware, combineReducers } from "redux";
import apiMiddleware from "../middleware/apiMiddleware";

import apiStatuses from "../reducers/apiStatuses";
import events from "../reducers/events";
import changingrooms from "../reducers/changingrooms";
import fieldSizes from "../reducers/fieldSizes";
import login from "../reducers/login";
import nonApprovedEvents from "../reducers/nonApprovedEvents";

const store = createStore(combineReducers({
    apiStatuses: apiStatuses,
    events: events,
    changingrooms: changingrooms,
    fieldSizes: fieldSizes,
    login: login,
    nonApprovedEvents: nonApprovedEvents
}), applyMiddleware(apiMiddleware));

export default store;
