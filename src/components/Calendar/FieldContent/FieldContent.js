import React from "react";
import "./FieldContent.css";
import Event from "../Event/Event";

const FieldContent = (props) => {
    const minPxlSize = 2.5; // If change timeline li height must change as well.

    const eventItems = props.events.map((e) => {
        console.log("FieldContent");
        console.log(e);
        
        const zeroDate = new Date(e.dateStart);
        zeroDate.setHours(0,0,0,0);
        let height = (Math.abs(e.dateStart - e.dateEnd) / 60 / 1000) * minPxlSize;
        let topPos = (Math.abs(zeroDate - e.dateStart) / 60 / 1000) * minPxlSize;
        e.posRight = false;
        
        if (e.shouldDivide) {
            for (let el of props.events) {
                if (el == e) break;
                
                if (el.shouldDivide) {
                    if (e.dateStart >= el.dateStart && e.dateStart <= el.dateEnd.addMinutes(-1)) {
                        e.posRight = !el.posRight;
                        break;
                    }
                    if (e.dateEnd <= el.dateEnd && e.dateEnd > el.dateStart) {
                        e.posRight = !el.posRight;
                        break;
                    }
                }
            }
        }

        return <Event key={e.Id}
                divide={e.shouldDivide}
                shouldBeRight={e.posRight}
                height={height} 
                top={topPos}
                team={e.team}
                club={e.club}
                fieldSize={e.fieldSize}
                timeFrom={e.dateStart}
                timeTo={e.dateEnd} />
    });

    return (
        <div className="event-container">
            {eventItems}
        </div>
    );
};

export default FieldContent;
