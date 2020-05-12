import {
    SESSION_STORAGE_SET_ITEM
} from "../constants/actionTypes";

const sessionStorageMiddleware = ({dispatch}) => next => action => {
    if (action.type !== SESSION_STORAGE_SET_ITEM) {
        next(action);
        return;
    };

    const {
        sessionKey,
        data,
        onSuccess
    } = action.payload;

    sessionStorage.setItem(sessionKey, data);

    dispatch(onSuccess());
};

export default sessionStorageMiddleware;
