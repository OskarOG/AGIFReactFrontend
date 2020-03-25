import React from "react";
import { useSelector, connect } from "react-redux";

import {
    closeApproveEventModal
} from "../../../actions/modals";

import NonApprovedEventContainer from "./NonApprovedEvent";
import ApproveEventModalPresenter from "../presenters/ApproveEventModal";

const ApproveEventModalContainer = ({
    dispatch
}) => {
    const approveEventModalIsHidden = useSelector(state => state.approveEventModalIsHidden);
    const events = useSelector(state => state.event.events);

    const handleCloseModal = () => {
        dispatch(closeApproveEventModal());
    };

    const handleOnSend = () => {
        // Dispatch send to events reducer.
    };

    const nonApprovedEvents = events.map((e) => <NonApprovedEventContainer key={e.Id} event={e} />);

    return <ApproveEventModalPresenter 
                isHidden={approveEventModalIsHidden}
                events={nonApprovedEvents}
                onClose={handleCloseModal}
                onSend={handleOnSend} />
};

export default connect()(ApproveEventModalContainer);
