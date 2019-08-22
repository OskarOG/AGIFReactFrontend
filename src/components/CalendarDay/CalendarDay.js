import React from "react";
import "./CalendarDay.css";
import { Field } from "../Field/Field";
import { DayHeader } from "../DayHeader/DayHeader";

export const CalendarDay = (props) => {
    const fieldItems = props.fields.map((f) =>
        <Field key={f.id}
                fieldTitle={f.title} 
                fieldEvents={props.dayEvents.filter((e) => e.fieldId == f.id)} />
    );

    return (
        <div className="day-container">
            <DayHeader date={props.dayDate} dayName={props.dayName} />
            {fieldItems}
        </div>
    );
}