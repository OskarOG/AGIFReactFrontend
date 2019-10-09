import React, { useState } from "react";

import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";

import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faSignOutAlt, faSignInAlt, faBars, faTimes, faStepForward, faStepBackward, faPlus } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {

    const handleBarClick = () => {
        props.toggleDrawer(true);
    }

    const handleCloseClick = () => {
        props.toggleDrawer(false);
    }

    const handleNewBookingClick = () => {
        props.onNewBookingClick();
    }

    const handleLoginClick = () => {
        props.onLoginClick("login");
    }

    const handleLogoutClick = () => {
        props.onLoginClick("logout");
    }

    const handleNextWeekClick = () => {
        props.onNextClick();
    }

    const handlePrevWeekClick = () => {
        props.onPrevClick();
    }

    return <div className={"navigation " + (props.drawerIsOpen ? "" : "nav-closed")}>
        <div className="nav-slide-controlls">
            <FontAwesomeIcon onClick={handleBarClick} className={"bar-icon " + (props.drawerIsOpen ? "hidden" : "")} icon={ faBars } />
            <FontAwesomeIcon onClick={handleCloseClick} className={"close-icon " + (props.drawerIsOpen ? "" : "hidden")} icon={ faTimes } />
        </div>
        <div className="nav-title title">
            <img src="./imgs/agif-logo-small.png" height="42" widht="42" />
            <h1 className={props.drawerIsOpen ? "" : "hidden"}>Alvesta GIF Planbokning</h1>
        </div>
        <div className="nav-content">
            <div onClick={handleNewBookingClick} className="nav-item">
                <FontAwesomeIcon className="nav-item-icon" icon={ faPlus } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Ny bokning</p>
            </div>
            <div onClick={handleNextWeekClick} className="nav-item">
                <FontAwesomeIcon className="nav-item-icon" icon={ faStepForward } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Nästa vecka</p>
            </div>
            <div onClick={handlePrevWeekClick} className="nav-item">
                <FontAwesomeIcon className="nav-item-icon" icon={ faStepBackward } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Föregående vecka</p>
            </div>

            <DayPicker
                className={"day-picker-move-left " + (props.drawerIsOpen ? "" : "hidden")}
                showWeekNumbers
                showOutsideDays
                firstDayOfWeek={1}
                selectedDays={props.selectedDate}
                onDayClick={props.onChange} />

            <div onClick={handleLoginClick} className={"nav-item " + (props.isLoggedIn ? "hidden" : "")}>
                <FontAwesomeIcon className="nav-item-icon sign-in-icon" icon={ faSignInAlt } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Logga in</p>
            </div>

            <div onClick={handleLogoutClick} className={"nav-item " + (props.isLoggedIn ? "" : "hidden")}>
                <FontAwesomeIcon className="nav-item-icon" icon={ faSignOutAlt } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Logga ut</p>
            </div>

            <div className={"nav-item " + (props.isLoggedIn ? "" : "hidden")}>
                <FontAwesomeIcon className="nav-item-icon admin-icon" icon={ faUserCog } />
                <p className={(props.drawerIsOpen ? "" : "hidden")}>Administrera</p>
            </div>
        </div>
    </div>;
};

export default Navigation;