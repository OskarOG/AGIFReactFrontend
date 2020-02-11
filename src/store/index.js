import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "../middleware/apiMiddleware";

import rootReducer from "../reducers/index";

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

export default store;
