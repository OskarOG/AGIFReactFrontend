import React from "react";

const ApproveEventModalPresenter = ({
    isHidden = true,
    events,
    onClose
}) => {
    return (
        <div className={"approval-modal-overlay " + (isHidden ? "hidden" : "")}>
            <div className="approval-modal-box">
                <div className="approval-modal-events"> 
                    { events }
                </div>
                <div className="approval-modal-close-btn">
                    <button className="btn" onClick={onClose}>Stäng</button>
                </div>
            </div>
        </div>
    );
};

export default ApproveEventModalPresenter;
