import React, { useState } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeLoginModal
} from "../../../actions/modals";

import LoginModalPresenter from "../presenters/LoginModal";

const LoginModalContainer = ({
    dispatch
}) => {
    const isHidden = useSelector(state => state.modal.loginModalIsHidden);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

export default connect()(LoginModalContainer);
