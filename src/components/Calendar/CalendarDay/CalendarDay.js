import React from "react";
import "./CalendarDay.css";
import { Field } from "../Field/Field";
import { DayHeader } from "../DayHeader/DayHeader";

export const CalendarDay = (props) => {
    console.log(props.fields);

    const fieldItems = props.fields.map((f) =>
        <Field key={props.dayDate.getTime()+"-"+f.Id}
                fieldTitle={f.Name}
                fieldEvents={props.dayEvents.filter((e) => e.FieldId == f.Id)} />
    );

    return (
        <div className="day-container">
            <DayHeader date={props.dayDate} dayName={props.dayName} />
            {fieldItems}
        </div>
    );
}