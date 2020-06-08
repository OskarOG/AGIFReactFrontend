import {
    SESSION_STORAGE_SET_ITEM,
    SESSION_STORAGE_REMOVE_ITEM
} from "../constants/actionTypes";

const sessionStorageMiddleware = ({dispatch}) => next => action => {
    switch(action.type) {
        case SESSION_STORAGE_SET_ITEM:
            sessionStorage.setItem(action.payload.sessionKey, action.payload.data);
            break;

        case SESSION_STORAGE_REMOVE_ITEM:
            sessionStorage.removeItem(action.payload.sessionKey);
            break;

        default:
            next(action);
            return;
    };

    dispatch(action.payload.onSuccess());
};

export default sessionStorageMiddleware;