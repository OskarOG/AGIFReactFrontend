import React from "react";

import CalendarDayPresenter from "../presenters/CalendarDay";

const CalendarDayContainer = ({
    date
}) => {
    

    return <CalendarDayPresenter
                day={date.getDay()}
                year={date.getFullYear()}
                month={date.getMonth()+1}
                date={date.getDate()}
                fields={[]} />;
};

export default CalendarDayContainer;
