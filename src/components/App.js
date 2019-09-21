import React, { useEffect, useState } from "react";

import "./App.css";

import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { Navigation } from "./Navigation/Navigation";
import { NewEventModal } from "./NewEventModal/NewEventModal";

export const App = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [weekStartDate, setWeekStartDate] = useState(new Date().getWeekDateSpan().startDate);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [drawerIsOpen, setDrawerOpen] = useState(true);

    const [displayNewBookingModal, setDisplayNewBookingModal] = useState(false);

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

    const handleNewBookingClick = () => {
        console.log("Hello");

        setDisplayNewBookingModal(true);
    }

    const handleCloseNewBookingClick = () => {
        setDisplayNewBookingModal(false);
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

    const handleOnNextClick = () => {
        const d = selectedDate.addDays(7);
        setSelectedDate(d);
        setWeekStartDate(d.getMondayDate());
    }

    const handleOnPrevClick = () => {
        const d = selectedDate.addDays(-7);
        setSelectedDate(d);
        setWeekStartDate(d.getMondayDate());
    }

    return (
        <div id="app-element" className="App">
            <main>
                <Navigation 
                    drawerIsOpen={drawerIsOpen}
                    toggleDrawer={handleDrawerToggle}
                    selectedDate={selectedDate}
                    onChange={handleDate}
                    isLoggedIn={isLoggedIn}
                    onNewBookingClick={handleNewBookingClick}
                    onLoginClick={handleLoginClick}
                    onNextClick={handleOnNextClick}
                    onPrevClick={handleOnPrevClick} />
                <CalendarWeek shiftRight={drawerIsOpen} weekStartDate={weekStartDate} />
                
                <NewEventModal />
            </main>
        </div>);
}
