import React from "react";

import EventPresenter from "../presenters/Event";

const EventContainer = ({
    event
}) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    const zeroDate = new Date(event.TimeFrom);
    zeroDate.setHours(0,0,0,0);
    let height = (Math.abs(event.TimeFrom - event.TimeTo) / 60 / 1000) * minPxlSize;
    let topPos = (Math.abs(zeroDate - event.TimeFrom) / 60 / 1000) * minPxlSize;

    const handleEventClick = () => {
        // TODO: Dispatch show alter event modal.
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

export default EventContainer;
