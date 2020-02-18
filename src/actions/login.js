import {
    SIGN_IN,
    SIGN_OUT,
    SET_IS_SIGNED_IN
} from "../constants/actionTypes";
import { apiAction } from "./api";
import ApiUrlFactory from "../factories/ApiUrlFactory";

export const signin = (username, password) => {
    return apiAction({
        url: ApiUrlFactory.login.signin(username, password),
        label: SIGN_IN,
        onSuccess: () => setIsSignedin(true),
        onFailure: () => console.log("Error when signing in")
    });
};

export const signout = userKey => {
    return apiAction({
        url: ApiUrlFactory.login.signout(userKey),
        method: "DELETE",
        label: SIGN_OUT,
        onSuccess: () => setIsSignedin(false),
        onFailure: () => console.log("Error when signing out")
    })
};


export const setIsSignedin = isSignedin => {
    return {
        type: SET_IS_SIGNED_IN,
        payload: isSignedin
    };
};