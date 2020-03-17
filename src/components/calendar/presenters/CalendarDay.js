import React from "react";

import DayHeaderPresenter from "./DayHeader";

const CalendarDayPresenter = ({
    dayName,
    year,
    month,
    date,
    fields
}) => {
    return (
        <div className="day-container">
            <DayHeaderPresenter dayName={dayName} year={year} month={month} date={date} />
            {fields}
        </div>
    );
};

export default CalendarDayPresenter;
