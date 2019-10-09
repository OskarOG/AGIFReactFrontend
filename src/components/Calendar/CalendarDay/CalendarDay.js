import React from "react";
import "./CalendarDay.css";
import Field from "../Field/Field";
import DayHeader from "../DayHeader/DayHeader";

const CalendarDay = (props) => {
    const fieldItems = props.fields.map((f) =>
        <Field key={props.dayDate.getTime()+"-"+f.Id}
                fieldTitle={f.Name}
                fieldEvents={props.dayEvents.filter((e) => e.FieldID == f.Id)} />
    );

    return (
        <div className="day-container">
            <DayHeader date={props.dayDate} dayName={props.dayName} />
            {fieldItems}
        </div>
    );
};

export default CalendarDay;