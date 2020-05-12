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
    const approveEventModalIsHidden = useSelector(state => state.modal.approveEventModalIsHidden);
    const nonApprovedEvents = useSelector(state => state.nonApprovedEvent.nonApprovedEvents);

    const handleCloseModal = () => {
        dispatch(closeApproveEventModal());
    };

    const handleOnSend = () => {
        // Dispatch send to events reducer.
    };

    const nonApprovedEventViews = nonApprovedEvents.map((e) => <NonApprovedEventContainer key={e.Id} event={e} />);

    return <ApproveEventModalPresenter 
                isHidden={approveEventModalIsHidden}
                events={nonApprovedEventViews}
                onClose={handleCloseModal}
                onSend={handleOnSend} />
};

export default connect()(ApproveEventModalContainer);
