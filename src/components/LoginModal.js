import React, { useState } from "react";
import { toast } from "react-toastify";

import API from "../helpers/Api";

const LoginModal = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = () => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = () => {
        setPassword(event.target.value);
    };

    const handleCloseButton = () => {
        props.close();

        setEmail("");
        setPassword("");
    };

    const handleSignIn = () => {
        API.login().signin(email, password).then(res => {
            props.saveUserKey(res.data);
        }).catch((err) => {
            toast.error("Felaktiga inloggningsuppgifter");
        });

        setEmail("");
        setPassword("");
    };

    return (
        <div className={"login-modal-overlay " + (props.isHidden ? "hidden" : "")}>
            <div className="login-modal-box">
                <h2>Logga in</h2>
                <form>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={email} onChange={handleEmailChange} type="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label className="label">Lösenord</label>
                        <input className="input" value={password} onChange={handlePasswordChange} type="password" />
                    </div>
                </form>
                
                <div className="login-modal-buttons">
                    <button type="button" className="btn close-btn" onClick={handleCloseButton}>Stäng</button>
                    <button type="button" className="btn send-btn" onClick={handleSignIn}>Logga in</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;