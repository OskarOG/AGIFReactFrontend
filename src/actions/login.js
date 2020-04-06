import ApiUrlFactory from "../factories/ApiUrlFactory";

import {
    SET_IS_SIGNED_IN,
    SESSION_STORAGE_SET_ITEM,
    SET_USER_KEY
} from "../constants/actionTypes";
import { apiAction } from "./api";
import {
    AGIFBOOKING_USER_KEY
} from "../constants/sessionKeys";


export const signin = (username, password, onSuccess) => {
    return apiAction({
        url: ApiUrlFactory.login.signin(username, password),
        method: "GET",
        label: "signin",
        onSuccess: onSuccess,
        onFailure: () => console.log("Error when signing in")
    });
};

export const signout = userKey => {
    return apiAction({
        url: ApiUrlFactory.login.signout(userKey),
        method: "DELETE",
        label: "signout",
        onSuccess: () => setIsSignedin(false),
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

export const setIsSignedin = isSignedin => {
    return {
        type: SET_IS_SIGNED_IN,
        payload: isSignedin
    };
};

export const setUserKey = userKey => {
    return {
        type: SET_USER_KEY,
        payload: userKey
    };
};
