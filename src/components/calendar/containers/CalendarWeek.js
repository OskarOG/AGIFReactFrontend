import React from "react";
import { useSelector } from "react-redux";

import CalendarWeekPresenter from "../presenters/CalendarWeek";
import CalendarDayContainer from "./CalendarDay";

const WEEK_DAYS = 7;

const CalendarWeekContainer = ({
    weekStartDate
}) => {
    const isMenuOpen = useSelector(state => state.isMenuOpen);

    const weekDates = getWeekDates(weekStartDate);
    const calendarDays = weekDates.map(d => <CalendarDayContainer date={d} />);
    
    return <CalendarWeekPresenter
                shiftRight={isMenuOpen}
                calDays={calendarDays} />
};

function getWeekDates(weekStartDate) {
    const weekDates = [];
    for (let i = 0; i < WEEK_DAYS; i++) {
        weekDates.push(new Date(weekStartDate.getTime() + (i*24*60*60*1000)));
    };

    return weekDates;
};

export default CalendarWeekContainer;
