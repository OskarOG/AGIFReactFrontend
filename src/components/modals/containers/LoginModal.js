import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeLoginModal
} from "../../../actions/modals";

import {
    signin,
    saveUserKeyAndSetSignedIn,
    setUserKey
} from "../../../actions/login";

import LoginModalPresenter from "../presenters/LoginModal";

const LoginModalContainer = ({
    dispatch
}) => {
    const isHidden = useSelector(state => state.modal.loginModalIsHidden);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        clearInputData();
    }, [isHidden]);

    const clearInputData = () => {
        setEmail("");
        setPassword("");
    };

    const handleOnEmailChange = () => {
        setEmail(event.target.value);
    };

    const handleOnPasswordChange = () => {
        setPassword(event.target.value);
    };

    const handleOnClose = () => {
        dispatch(closeLoginModal());
    };

    const handleOnSignIn = () => {
        dispatch(signin(email, password, (userKey) => {
            dispatch(closeLoginModal());
            dispatch(setUserKey(userKey));
            return saveUserKeyAndSetSignedIn(userKey);
        }));
    };

    return <LoginModalPresenter
                isHidden={isHidden}
                email={email}
                onEmailChange={handleOnEmailChange}
                password={password}
                onPasswordChange={handleOnPasswordChange}
                onClose={handleOnClose}
                onSignIn={handleOnSignIn} />
};

export default connect()(LoginModalContainer);
