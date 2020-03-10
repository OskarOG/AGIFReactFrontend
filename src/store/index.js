import { createStore, applyMiddleware, combineReducers } from "redux";
import apiMiddleware from "../middleware/apiMiddleware";

import apiStatuses from "../reducers/apiStatuses";
import changingrooms from "../reducers/changingrooms";
import events from "../reducers/events";
import fieldSizes from "../reducers/fieldSizes";
import login from "../reducers/login";
import nonApprovedEvents from "../reducers/nonApprovedEvents";
import modals from "../reducers/modals";

const store = createStore(combineReducers({
    apiStatuses: apiStatuses,
    changingrooms: changingrooms,
    events: events,
    fieldSizes: fieldSizes,
    login: login,
    nonApprovedEvents: nonApprovedEvents,
    modals: modals
}), applyMiddleware(apiMiddleware));

export default store;
