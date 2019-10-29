import React from "react";
import "./FieldContent.css";
import Event from "../Event/Event";

const FieldContent = (props) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    const eventItems = props.events.map((e) => {
        console.log(e);
        
        e.TimeFrom = new Date(e.TimeFrom);
        e.TimeTo = new Date(e.TimeTo);

        const zeroDate = new Date(e.TimeFrom);
        zeroDate.setHours(0,0,0,0);
        let height = (Math.abs(e.TimeFrom - e.TimeTo) / 60 / 1000) * minPxlSize;
        let topPos = (Math.abs(zeroDate - e.TimeFrom) / 60 / 1000) * minPxlSize;

        return <Event key={e.Id}
                divide={e.ShouldDivide}
                shouldBeRight={e.PosToRight}
                height={height} 
                top={topPos}
                team={e.Team}
                club={e.Club}
                fieldSize={e.FieldSize}
                timeFrom={e.TimeFrom}
                timeTo={e.TimeTo}
                eventColor={e.EventColor}
                isApproved={e.IsApproved} />
    });

    return (
        <div className="event-container">
            {eventItems}
        </div>
    );
};

export default FieldContent;
