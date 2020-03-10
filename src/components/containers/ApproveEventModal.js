import React from "react";
import { useSelector } from "react-redux";

import NonApprovedEventContainer from "./NonApprovedEvent";
import ApproveEventModalPresenter from "../presenters/ApproveEventModal";

const ApproveEventModalContainer = ({

}) => {
    approveEventModalIsHidden = useSelector(state => state.approveEventModalIsHidden);
    events = useSelector(state => state.events);

    const handleCloseModal = () => {
        // Dispatch close to modals reducer.
    };

    const handleOnSend = () => {
        // Dispatch send to events reducer.
    };

    const nonApprovedEvents = events.map((e) => <NonApprovedEventContainer event={e} />);

    return <ApproveEventModalPresenter 
                isHidden={approveEventModalIsHidden}
                events={nonApprovedEvents}
                onClose={handleCloseModal}
                onSend={handleOnSend} />
};

export default ApproveEventModalContainer;
