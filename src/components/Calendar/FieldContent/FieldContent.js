import React from "react";
import "./FieldContent.css";
import Event from "../Event/Event";

const FieldContent = (props) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    const eventItems = props.events.map((e) => {
        e.TimeFrom = new Date(e.TimeFrom);
        e.TimeTo = new Date(e.TimeTo);

        const zeroDate = new Date(e.TimeFrom);
        zeroDate.setHours(0,0,0,0);
        let height = (Math.abs(e.TimeFrom - e.TimeTo) / 60 / 1000) * minPxlSize;
        let topPos = (Math.abs(zeroDate - e.TimeFrom) / 60 / 1000) * minPxlSize;
        e.posRight = false;

        if (e.ShouldDivide) {
            for (var el of props.events) {
                if (el === e)
                    continue;
                
                if (el.ShouldDivide) {
                    el.TimeFrom = new Date(el.TimeFrom);
                    el.TimeTo = new Date(el.TimeTo);

                    if (e.TimeFrom.getUnixTimestamp() == el.TimeFrom.getUnixTimestamp() && e.TimeTo.getUnixTimestamp() == el.TimeTo.getUnixTimestamp() && !el.posRight) {
                        console.log("Pos right");
                        e.posRight = true;
                        break;
                    };

                    // if (e.TimeFrom.getUnixTimestamp() >= el.TimeFrom.getUnixTimestamp() && e.TimeFrom.getUnixTimestamp() <= el.TimeTo.getUnixTimestamp()) {
                    //     e.posRight = !el.posRight;
                    //     break;
                    // };
                };
            };
        };

        return <Event key={e.Id}
                divide={e.ShouldDivide}
                shouldBeRight={e.posRight}
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
