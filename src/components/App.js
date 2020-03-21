import React, { useEffect, useState } from "react";

import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

import CalendarWeek from "./CalendarWeek";
import Navigation from "./Navigation";
import LoginModal from "./LoginModal";
import ApproveEventModal from "./ApproveEventModal";

import API from "../helpers/Api";

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

    const [changingRooms, setChangingRooms] = useState([]);

    useEffect(() => {
        if (userApiKey != null && userApiKey != "") {
            setLoggedIn(true);

            API.nonApprovedEvents().getCount(userApiKey).then(res => {
                setNonApprovedCount(res.data);
            }).catch(err => {
                toast.error("Det gick inte hämta antalet ej godkända bokningar");
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
                API.login().signout(userApiKey).then((res) => {
                    setLoggedIn(false);
                    sessionStorage.removeItem(AGIF_SESSION_STORAGE_USERKEY);

                    location.reload();
                }).catch(err => {
                    toast.error("Kunde inte logga ut");
                });
                break;
        };
    };

    const handleLoginResult = userKey => {
        setLoggedIn(true);
        setHideLoginModal(true);

        sessionStorage.setItem(AGIF_SESSION_STORAGE_USERKEY, userKey);
        setApiKey(userKey);

        API.nonApprovedEvents().getCount(userKey).then(res => {
            setNonApprovedCount(res.data);
        }).catch(err => {
            toast.error("Det gick inte hämta antalet ej godkända bokningar");
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
        API.nonApprovedEvents().get(userApiKey).then(res => {
            setHideNonApprovedModal(false);
            
            setNonApprovedEvents(res.data);
        }).catch(err => {
            toast.error("Det gick inte hämta ej godkända bokningar");
        });
    };

    const handleCloseApproveEventModal = () => {
        setHideNonApprovedModal(true);
    };

    const handleSendApprovalEvent = (events) => {
        API.nonApprovedEvents().approve(userApiKey, events).then(res => {
            toast.success("Bokningar godkända");

            if (userApiKey != null && userApiKey != "") {
                setLoggedIn(true);
    
                API.nonApprovedEvents().getCount(userApiKey).then(res => {
                    setNonApprovedCount(res.data);
                }).catch(err => {
                    toast.error("Det gick inte hämta antalet ej godkända bokningar");
                });

                API.nonApprovedEvents().get(userApiKey).then(res => {
                    setHideNonApprovedModal(false);
                    
                    setNonApprovedEvents(res.data);
                }).catch(err => {
                    toast.error("Det gick inte hämta ej godkända bokningar");
                });
            };
        }).catch(err => {
            toast.error("Det gick inte godkänna bokningar");
        });
    };

    return (
        <div id="app-element" className="App">
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                pauseOnVisibilityChange />

            <main>
                <LoginModal isHidden={hideLoginModal} saveUserKey={handleLoginResult} close={handleCloseLoginModal} />

                <ApproveEventModal changingRooms={changingRooms} close={handleCloseApproveEventModal} isHidden={hideNonApprovedModal} nonApprovedEvents={nonApprovedEvents} send={handleSendApprovalEvent} />

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
                
                <CalendarWeek 
                    changingRooms={changingRooms} 
                    userKey={userApiKey} 
                    adminLoggedIn={userApiKey != null} 
                    onCloseBookingModal={handleCloseBookingModal} 
                    newBookingModalIsHidden={newBookingModalIsHidden} 
                    shiftRight={drawerIsOpen} 
                    weekDate={weekDate} />
            </main>
        </div>
    );
};

export default App;