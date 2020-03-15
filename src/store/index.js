import { createStore, applyMiddleware, combineReducers } from "redux";
import apiMiddleware from "../middleware/apiMiddleware";

import apiStatuses from "../reducers/apiStatuses";
import changingrooms from "../reducers/changingrooms";
import events from "../reducers/events";
import fields from "../reducers/fields";
import fieldSizes from "../reducers/fieldSizes";
import login from "../reducers/login";
import nonApprovedEvents from "../reducers/nonApprovedEvents";
import modals from "../reducers/modals";
import admins from "../reducers/admins";

const store = createStore(combineReducers({
    apiStatus: apiStatuses,
    changingroom: changingrooms,
    event: events,
    field: fields,
    fieldSize: fieldSizes,
    login: login,
    nonApprovedEvent: nonApprovedEvents,
    modal: modals,
    admin: admins,
}), applyMiddleware(apiMiddleware));

export default store;
