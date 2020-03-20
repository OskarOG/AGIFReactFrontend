import React from "react";

import DayHeaderPresenter from "./DayHeader";

const CalendarDayPresenter = ({
    day,
    year,
    month,
    date,
    fields
}) => {
    const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    return (
        <div className="day-container">
            <DayHeaderPresenter dayName={days[day]} year={year} month={month} date={date} />
            {fields}
        </div>
    );
};

export default CalendarDayPresenter;
