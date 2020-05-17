import React from "react";
import { connect, useSelector } from "react-redux";

import EventPresenter from "../presenters/Event";

import {
    setSelectedEvent
} from "../../../actions/events";

import {
    openAlterEventModal
} from "../../../actions/modals";

const EventContainer = ({
    dispatch,
    event
}) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    const isSignedIn = useSelector(state => state.login.isSignedIn);

    const zeroDate = new Date(event.TimeFrom);
    zeroDate.setHours(0,0,0,0);
    let height = (Math.abs(event.TimeFrom - event.TimeTo) / 60 / 1000) * minPxlSize;
    let topPos = (Math.abs(zeroDate - event.TimeFrom) / 60 / 1000) * minPxlSize;

    const handleEventClick = () => {
        if (isSignedIn){
            dispatch(setSelectedEvent(event));
            dispatch(openAlterEventModal());
        };
    };

    return <EventPresenter divide={event.ShouldDivide}
                height={height}
                top={topPos}
                shouldBeRight={event.PosToRight}
                isApproved={event.IsApproved}
                eventColor={event.EventColor}
                onEventClick={handleEventClick}
                team={event.Team}
                club={event.Club}
                fieldSize={event.FieldSize}
                timeFrom={event.TimeFrom}
                timeTo={event.TimeTo}
                changingRoomName={event.ChangingRoomName}
                changingRoomTimeFrom={event.ChangingRoomTimeFrom}
                changingRoomTimeTo={event.ChangingRoomTimeTo}  />
};

export default connect()(EventContainer);