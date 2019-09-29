import React, { useEffect, useState } from "react";

import "./App.css";

import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { Navigation } from "./Navigation/Navigation";
import { NewEventModal } from "./NewEventModal/NewEventModal";

export const App = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [weekDate, setWeekDate] = useState(new Date().getWeekDateSpan());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [drawerIsOpen, setDrawerOpen] = useState(true);

    const [newBookingModalIsHidden, setBookingModalHidden] = useState(true);

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
        setWeekDate(date.getWeekDateSpan());
    };

    const handleDrawerToggle = status => {
        setDrawerOpen(status);
    }

    const handleNewBookingClick = () => {
        console.log("Hello");

        setBookingModalHidden(false);
    }

    const handleCloseNewBookingClick = () => {
        setBookingModalHidden(true);
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
        setWeekDate(d.getWeekDateSpan());
    }

    const handleOnPrevClick = () => {
        const d = selectedDate.addDays(-7);
        setSelectedDate(d);
        setWeekDate(d.getWeekDateSpan());
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
                <CalendarWeek shiftRight={drawerIsOpen} weekDate={weekDate}  />
                
                <NewEventModal isHidden={newBookingModalIsHidden} close={handleCloseNewBookingClick}/>
            </main>
        </div>);
}
