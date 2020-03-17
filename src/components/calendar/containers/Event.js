import React from "react";
import moment from "moment";

const EventContainer = ({
    event
}) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    event.TimeFrom = moment.utc(event.TimeFrom).local().toDate();
    event.TimeTo = moment.utc(event.TimeTo).local().toDate();

    event.ChangingRoomTimeFrom = moment.utc(event.ChangingRoomTimeFrom).local().toDate();
    event.ChangingRoomTimeTo = moment.utc(event.ChangingRoomTimeTo).local().toDate();

    const zeroDate = new Date(event.TimeFrom);
    zeroDate.setHours(0,0,0,0);
    let height = (Math.abs(event.TimeFrom - event.TimeTo) / 60 / 1000) * minPxlSize;
    let topPos = (Math.abs(zeroDate - event.TimeFrom) / 60 / 1000) * minPxlSize;

    const handleEventClick = () => {
        // TODO: Dispatch show alter event modal.
    };

    return <Event key={event.Id}
                divide={event.ShouldDivide}
                shouldBeRight={event.PosToRight}
                height={height} 
                top={topPos}
                team={event.Team}
                club={event.Club}
                fieldSize={event.FieldSize}
                timeFrom={event.TimeFrom}
                timeTo={event.TimeTo}
                eventColor={event.EventColor}
                isApproved={event.IsApproved}
                onEventClick={handleEventClick}
                changingRoomName={event.ChangingRoomName}
                changingRoomTimeFrom={event.ChangingRoomTimeFrom}
                changingRoomTimeTo={event.ChangingRoomTimeTo} />
};

export default EventContainer;