import React, { useEffect, useState } from "react";

import "./App.css";

import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { Navigation } from "./Navigation/Navigation";

export const App = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [weekStartDate, setWeekStartDate] = useState(new Date().getWeekDateSpan().startDate);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [drawerIsOpen, setDrawerOpen] = useState(true);

    useEffect(() => {
        let d = new Date();
        let dayInt = d.getDay() - 1;
        if (dayInt == -1) dayInt = 6;
        let pxToScrollForDays = 300 * dayInt;
        let scrollToTimeInPx = Math.round((((d.getTime() - d.setHours(0,0,0,0)) / 1000) / 60) - 100) * 2.5;
        window.scrollTo(pxToScrollForDays, scrollToTimeInPx);
    }, []);

    const handleDate = date => {
        setSelectedDate(date);
        setWeekStartDate(date.getMondayDate());
    };

    const handleDrawerToggle = status => {
        setDrawerOpen(status);
    }

    const handleLoginClick = loginEventType => {
        switch (loginEventType) {
            case "login" :
                setLoggedIn(true);
                break;
            case "logout" :
                setLoggedIn(false);
                break;
        }
    }

    return (
        <div className="App">
            <main>
                <Navigation 
                    drawerIsOpen={drawerIsOpen}
                    toggleDrawer={handleDrawerToggle}
                    selectedDate={selectedDate}
                    onChange={handleDate}
                    isLoggedIn={isLoggedIn}
                    onLoginClick={handleLoginClick} />
                <CalendarWeek shiftRight={drawerIsOpen} weekStartDate={weekStartDate} />
            </main>
        </div>);
}
