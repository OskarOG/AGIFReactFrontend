import { createStore, applyMiddleware, combineReducers } from "redux";
import apiMiddleware from "../middleware/apiMiddleware";

import admins from "../reducers/admins";
import apiStatuses from "../reducers/apiStatuses";
import changingrooms from "../reducers/changingrooms";
import colors from "../reducers/colors";
import dates from "../reducers/dates";
import events from "../reducers/events";
import fields from "../reducers/fields";
import fieldSizes from "../reducers/fieldSizes";
import login from "../reducers/login";
import menu from "../reducers/menu";
import modals from "../reducers/modals";
import nonApprovedEvents from "../reducers/nonApprovedEvents";

const store = createStore(combineReducers({
    admin: admins,
    apiStatus: apiStatuses,
    changingroom: changingrooms,
    color: colors,
    date: dates,
    event: events,
    field: fields,
    fieldSize: fieldSizes,
    login: login,
    menu: menu,
    modal: modals,
    nonApprovedEvent: nonApprovedEvents
}), applyMiddleware(apiMiddleware));

export default store;
