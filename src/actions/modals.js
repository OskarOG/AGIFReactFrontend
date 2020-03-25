import {
    SET_ALTER_EVENT_MODAL_IS_HIDDEN,
    SET_APPROVE_EVENT_MODAL_IS_HIDDEN,
    SET_LOGIN_MODAL_IS_HIDDEN,
    SET_NEW_EVENT_MODAL_IS_HIDDEN
} from "../constants/actionTypes";

export const openAlterEventModal = () => {
    return {
        type: SET_ALTER_EVENT_MODAL_IS_HIDDEN,
        payload: false
    };
};

export const closeAlterEventModal = () => {
    return {
        type: SET_ALTER_EVENT_MODAL_IS_HIDDEN,
        payload: true
    };
};

export const openApproveEventModal = () => {
    return {
        type: SET_APPROVE_EVENT_MODAL_IS_HIDDEN,
        payload: false
    };
};

export const closeApproveEventModal = () => {
    return {
        type: SET_APPROVE_EVENT_MODAL_IS_HIDDEN,
        payload: true
    };
};

export const openLoginModal = () => {
    return {
        type: SET_LOGIN_MODAL_IS_HIDDEN,
        payload: false
    };
};

export const closeLoginModal = () => {
    return {
        type: SET_LOGIN_MODAL_IS_HIDDEN,
        payload: true
    };
};

export const openNewEventModal = () => {
    return {
        type: SET_NEW_EVENT_MODAL_IS_HIDDEN,
        payload: false,
    };
};

export const closeNewEventModal = () => {
    return {
        type: SET_NEW_EVENT_MODAL_IS_HIDDEN,
        payload: true
    };
};
