import React, { useEffect, useState } from "react";

import "./App.css";

import CalendarWeek from "./Calendar/CalendarWeek/CalendarWeek";
import Navigation from "./Navigation/Navigation";
import LoginModal from "./LoginModal/LoginModal";
import Api from "../helpers/Api";
import ApproveEventModal from "./ApproveEventModal/ApproveEventModal";

const App = () => {
    const AGIF_SESSION_STORAGE_USERKEY = "AGIFSESSIONKEY_USERKEY";


    const [isLoggedIn, setLoggedIn] = useState(false);
    const [hideLoginModal, setHideLoginModal] = useState(true);
    const [userApiKey, setApiKey] = useState(sessionStorage.getItem(AGIF_SESSION_STORAGE_USERKEY));

    const [hideNonApprovedModal, setHideNonApprovedModal] = useState(true);
    const [nonApprovedEvents, setNonApprovedEvents] = useState([]);
    const [nonApprovedCount, setNonApprovedCount] = useState("");

    const [weekDate, setWeekDate] = useState(new Date().getWeekDateSpan());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [drawerIsOpen, setDrawerOpen] = useState(true);
    const [newBookingModalIsHidden, setBookingModalHidden] = useState(true);

    useEffect(() => {
        if (userApiKey != null && userApiKey != "") {
            setLoggedIn(true);

            Api.nonApprovedEvents().getCount(userApiKey).then(res => {
                setNonApprovedCount(res.data);
            });
        };

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
    };

    const handleNewBookingClick = () => {
        setBookingModalHidden(false);
    };

    const handleLoginClick = loginEventType => {
        switch (loginEventType) {
            case "login" :
                setHideLoginModal(false);
                break;
            case "logout" :
                Api.login().signout(userApiKey).then((res) => {
                    setLoggedIn(false);
                    sessionStorage.removeItem(AGIF_SESSION_STORAGE_USERKEY);
                });
                break;
        };
    };

    const handleLoginResult = userKey => {
        setLoggedIn(true);
        setHideLoginModal(true);

        sessionStorage.setItem(AGIF_SESSION_STORAGE_USERKEY, userKey);
        setApiKey(userKey);

        Api.nonApprovedEvents().getCount(userKey).then(res => {
            setNonApprovedCount(res.data);
        });
    };

    const handleCloseLoginModal = () => {
        setHideLoginModal(true);
    };

    const handleOnNextClick = () => {
        // TODO: Load the week after as well and save it so the switch is fast when the user change to the next week after.

        const d = selectedDate.addDays(7);
        setSelectedDate(d);
        setWeekDate(d.getWeekDateSpan());
    };

    const handleOnPrevClick = () => {
        // TODO: Load the week before as well and save it so the switch is fast when the user change to the next week before.

        const d = selectedDate.addDays(-7);
        setSelectedDate(d);
        setWeekDate(d.getWeekDateSpan());
    };

    const handleCloseBookingModal = () => {
        setBookingModalHidden(true);
    };

    const handleShowApproveEventModal = () => {
        Api.nonApprovedEvents().get(userApiKey).then(res => {
            setHideNonApprovedModal(false);
            
            setNonApprovedEvents(res.data);
        });
    };

    const handleCloseApproveEventModal = () => {
        setHideNonApprovedModal(true);
    };

    const handleSendApprovalEvent = (events) => {
        console.log(events);

        Api.nonApprovedEvents().approve(userApiKey, events).then(res => {
            console.log(res);
            // TODO: Show success msg.
        });
    };

    return (
        <div id="app-element" className="App">
            <main>
                <LoginModal isHidden={hideLoginModal} saveUserKey={handleLoginResult} close={handleCloseLoginModal} />

                <ApproveEventModal close={handleCloseApproveEventModal} isHidden={hideNonApprovedModal} nonApprovedEvents={nonApprovedEvents} send={handleSendApprovalEvent} />

                <Navigation 
                    drawerIsOpen={drawerIsOpen}
                    toggleDrawer={handleDrawerToggle}
                    selectedDate={selectedDate}
                    onChange={handleDate}
                    isLoggedIn={isLoggedIn}
                    onNewBookingClick={handleNewBookingClick}
                    onLoginClick={handleLoginClick}
                    onNextClick={handleOnNextClick}
                    onPrevClick={handleOnPrevClick}
                    onShowApproveEventModal={handleShowApproveEventModal}
                    nonApprovedCount={nonApprovedCount} />
                
                <CalendarWeek userKey={userApiKey} adminLoggedIn={userApiKey != null} onCloseBookingModal={handleCloseBookingModal} newBookingModalIsHidden={newBookingModalIsHidden} shiftRight={drawerIsOpen} weekDate={weekDate} />
            </main>
        </div>
    );
};

export default App;