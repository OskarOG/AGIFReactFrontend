import React from "react";

const ApproveEventModalPresenter = ({
    isHidden = true,
    events,
    onClose,
    onSend
}) => {
    return (
        <div className={"approval-modal-overlay " + (isHidden ? "hidden" : "")}>
            <div className="approval-modal-box">
                <div className="approval-modal-buttons">
                    <div>
                        <button type="button" className="btn close-btn" onClick={onClose}>Stäng</button>
                        <button type="button" className="btn send-btn" onClick={onSend}>Skicka</button>
                    </div>
                </div>
                <div className="approval-modal-events"> 
                    { events }
                </div>
            </div>
        </div>
    );
};

export default ApproveEventModalPresenter;
