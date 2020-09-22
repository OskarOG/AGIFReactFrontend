import ApiUrlFactory from "../factories/ApiUrlFactory";

import {
    SET_IS_SIGNED_IN,
    SESSION_STORAGE_SET_ITEM,
    SESSION_STORAGE_REMOVE_ITEM
} from "../constants/actionTypes";
import {
    SIGNING_LABEL,
    SIGNOUT_LABEL
} from "../constants/apiLabelConstants";
import { apiAction } from "./api";
import {
    AGIFBOOKING_USER_KEY
} from "../constants/sessionKeys";


export const signin = (username, password, onSuccess) => {
    return apiAction({
        url: ApiUrlFactory.login.signin(username, password),
        method: "GET",
        label: SIGNING_LABEL,
        onSuccess: onSuccess,
        onFailure: () => console.log("Error when signing in")
    });
};

export const signout = () => {
    return apiAction({
        url: ApiUrlFactory.login.signout(),
        method: "DELETE",
        label: SIGNOUT_LABEL,
        onSuccess: removeUserKeyAndSetSignedOut,
        onFailure: () => console.log("Error when signing out")
    })
};

export const saveUserKeyAndSetSignedIn = userKey => {
    return {
        type: SESSION_STORAGE_SET_ITEM,
        payload: {
            sessionKey: AGIFBOOKING_USER_KEY,
            data: userKey,
            onSuccess: () => setIsSignedin(true)
        }
    };
};

export const removeUserKeyAndSetSignedOut = () => {
    return {
        type: SESSION_STORAGE_REMOVE_ITEM,
        payload: {
            sessionKey: AGIFBOOKING_USER_KEY,
            onSuccess: () => setIsSignedin(false)
        }
    };
};

export const setIsSignedin = isSignedin => {
    return {
        type: SET_IS_SIGNED_IN,
        payload: isSignedin
    };
};
