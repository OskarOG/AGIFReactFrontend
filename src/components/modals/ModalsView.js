import React from "react";

import AlterEventModalContainer from "./containers/AlterEventModal";
import ApproveEventModalContainer from "./containers/ApproveEventModal";
import LoginModalContainer from "./containers/LoginModal";
import NewEventModalContainer from "./containers/NewEventModal";

const ModalsView = () => {
    return (
        <div>
            <AlterEventModalContainer />
            <ApproveEventModalContainer />
            <LoginModalContainer />
            <NewEventModalContainer />
        </div>
    );
};

export default ModalsView;
