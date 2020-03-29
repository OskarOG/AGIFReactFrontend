import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    getEventsBetweenDates
} from "../../../actions/events";

import CalendarWeekPresenter from "../presenters/CalendarWeek";
import CalendarDayContainer from "./CalendarDay";

const WEEK_DAYS = 7;

const CalendarWeekContainer = ({
    dispatch
}) => {
    const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
    const selectedDate = useSelector(state => state.date.selectedDate);
    const [mondayDate, setMondayDate] = useState(new Date().getMondayDate())
    const [weekDates, setWeekDates] = useState(getWeekDates(mondayDate));

    useEffect(() => {
        setMondayDate(selectedDate.getMondayDate());
        setWeekDates(getWeekDates(mondayDate));
        
        dispatch(getEventsBetweenDates(weekDates[0], weekDates[6]));
    }, [selectedDate]);

    const calendarDays = weekDates.map(d => <CalendarDayContainer key={d.getDay()} date={d} />);

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

export default connect()(CalendarWeekContainer);
