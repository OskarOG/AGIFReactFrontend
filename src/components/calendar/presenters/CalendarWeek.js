import React from "react";

import Time from "../Time";
import Timeline from "../containers/Timeline";

const CalendarWeekPresenter = ({
    shiftRight,
    calDays
}) => {
    return (
        <div className={"calendar-week " + (shiftRight ? "if-drawer-open" : "if-drawer-closed")}>
            <Time />
            
            {calDays}
            
            <Timeline shiftRight={shiftRight} />
        </div>
    );
};

export default CalendarWeekPresenter;
