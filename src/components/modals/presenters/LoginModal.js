import React from "react";

const LoginModalPresenter = ({
    isHidden = true,
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onClose,
    onSignIn,
    onTextboxKeyPress
}) => {
    return (
        <div className={"login-modal-overlay " + (isHidden ? "hidden" : "")}>
            <div className="login-modal-box">
                <h2>Logga in</h2>
                <form>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={email} onChange={onEmailChange} type="email" placeholder="name@example.com" onKeyPress={onTextboxKeyPress} />
                    </div>
                    <div>
                        <label className="label">Lösenord</label>
                        <input className="input" value={password} onChange={onPasswordChange} type="password" onKeyPress={onTextboxKeyPress} />
                    </div>
                </form>
                
                <div className="login-modal-buttons">
                    <button type="button" className="btn close-btn" onClick={onClose}>Stäng</button>
                    <button type="button" className="btn send-btn" onClick={onSignIn}>Logga in</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModalPresenter;
