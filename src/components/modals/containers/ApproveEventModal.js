import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeApproveEventModal
} from "../../../actions/modals";

import {
    getNonApprovedEvents
} from "../../../actions/nonApprovedEvents";

import NonApprovedEventContainer from "./NonApprovedEvent";
import ApproveEventModalPresenter from "../presenters/ApproveEventModal";

const ApproveEventModalContainer = ({
    dispatch
}) => {
    const approveEventModalIsHidden = useSelector(state => state.modal.approveEventModalIsHidden);
    const nonApprovedEvents = useSelector(state => state.nonApprovedEvent.nonApprovedEvents);

    useEffect(() => {
        if (!approveEventModalIsHidden) {
            dispatch(getNonApprovedEvents());
        };
    }, [approveEventModalIsHidden]);

    const handleCloseModal = () => {
        dispatch(closeApproveEventModal());
    };

    const nonApprovedEventViews = nonApprovedEvents.map((e) => <NonApprovedEventContainer key={e.Id} event={e} />);

    return <ApproveEventModalPresenter 
                isHidden={approveEventModalIsHidden}
                events={nonApprovedEventViews}
                onClose={handleCloseModal} />
};

export default connect()(ApproveEventModalContainer);