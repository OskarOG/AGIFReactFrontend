import React, { useState } from "react";
import { useSelector } from "react-redux";

import LoginModalPresenter from "../presenters/LoginModal";

const LoginModalContainer = () => {
    const isHidden = useSelector(state => state.loginModalIsHidden);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnEmailChange = () => {
        setEmail(event.target.value);
    };

    const handleOnPasswordChange = () => {
        setPassword(event.target.value);
    };

    const handleOnClose = () => {
        // TODO: Dispatch close login modal.
    };

    const handleOnSignIn = () => {
        // TODO: Dispatch sign in.
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

export default LoginModalContainer;
