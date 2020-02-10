import React from "react";

import Field from "./Field";
import DayHeader from "./DayHeader";

const CalendarDay = (props) => {
    const fieldItems = props.fields.map((f) =>
        <Field key={props.dayDate.getTime()+"-"+f.Id}
                fieldTitle={f.Name}
                fieldEvents={props.dayEvents.filter((e) => e.FieldID == f.Id)}
                openAlterEventModal={props.openAlterEventModal} />
    );

    return (
        <div className="day-container">
            <DayHeader date={props.dayDate} dayName={props.dayName} />
            {fieldItems}
        </div>
    );
};

export default CalendarDay;