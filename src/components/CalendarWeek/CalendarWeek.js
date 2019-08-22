import React from "react";
import "./CalendarWeek.css";
import { CalendarDay } from "../CalendarDay/CalendarDay";
import { SampleData } from "../../helpers/SampleData";

export const CalendarWeek = (props) => {
    const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    const fields = SampleData.field; // TODO: API call fields

    const d = new Date(props.weekStartDate);
    const calDays = [];
    for (let i = 0; i < 7; i++) {
        d.setTime(props.weekStartDate.getTime() + (i*24*60*60*1000));

        calDays.push(<CalendarDay key={d.getTime()}
                                    fields={fields}
                                    dayEvents={props.weekEvents.filter((e) => e.dateStart.getDate() == d.getDate())}
                                    dayDate={new Date(d)}
                                    dayName={days[d.getDay()]} />);
    }

    return (
        <div className="calendar-week">
            {calDays}
        </div>
    );
}