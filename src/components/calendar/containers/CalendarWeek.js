import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    getEventsBetweenDates
} from "../../../actions/events";

import {
    WEEK_DAY_WIDTH,
    MINUTE_HEIGHT
} from "../../../constants/elementSizes";

import CalendarWeekPresenter from "../presenters/CalendarWeek";
import CalendarDayContainer from "./CalendarDay";

const WEEK_DAYS = 7;

const CalendarWeekContainer = ({
    dispatch
}) => {
    const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
    const selectedDate = useSelector(state => state.date.selectedDate);
    const [weekDates, setWeekDates] = useState(getWeekDates(new Date().getWeekDateSpan().startDate));

    useEffect(() => {
        const currentDate = new Date();
        
        const dayNumb = currentDate.getDay() - 1;
        let dayPixels = WEEK_DAY_WIDTH * dayNumb;
        let scrollPixels = Math.round((((currentDate.getTime() - currentDate.setHours(0,0,0,0)) / 1000) / 60) - 100) * MINUTE_HEIGHT;

        window.scrollTo(dayPixels, scrollPixels);

        console.log(`DayNumber: ${dayNumb}, DayPixels: ${dayPixels}, ScrollPixels: ${scrollPixels}`);
    }, []);

    useEffect(() => {
        const weekDateSpan = selectedDate.getWeekDateSpan();
        setWeekDates(getWeekDates(weekDateSpan.startDate));

        dispatch(getEventsBetweenDates(weekDateSpan.startDate, weekDateSpan.endDate));
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
