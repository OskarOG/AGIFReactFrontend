import React from "react";
import "./FieldContent.css";

import { Event } from "../Event/Event";

export const FieldContent = (props) => {

    const eventItems = props.events.map((e) => {
        const zeroDate = new Date(e.dateStart);
        zeroDate.setHours(0,0,0,0);

        return <Event key={e.id} 
                height={Math.abs(e.dateStart - e.dateEnd) / 60 / 1000} 
                top={Math.abs(zeroDate - e.dateStart) / 60 / 1000}
                team={e.team}
                club={e.club}
                timeFrom={e.dateStart}
                timeTo={e.dateEnd} />
    });

    return (
        <div className="event-container">
            {eventItems}
        </div>
    );
};