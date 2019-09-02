import React, { useState } from "react";

import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";

import "./Navigation.css";

export const Navigation = (props) => {

    const handleBarClick = () => {
        props.toggleDrawer(true);
    }

    const handleCloseClick = () => {
        props.toggleDrawer(false);
    }

    const handleLoginClick = () => {
        props.onLoginClick("login");
    }

    const handleLogoutClick = () => {
        props.onLoginClick("logout");
    }

    return <div className={"navigation " + (props.drawerIsOpen ? "" : "nav-closed")}>
        <div className="nav-slide-controlls">
            <i onClick={handleBarClick} className={"fa fa-bars bar-icon " + (props.drawerIsOpen ? "hidden" : "")} />
            <i onClick={handleCloseClick} className={"fa fa-times close-icon " + (props.drawerIsOpen ? "" : "hidden")} />
        </div>
        <div className="nav-title title">
            <img src="./imgs/agif-logo-small.png" height="42" widht="42" />
            <h1 className={props.drawerIsOpen ? "" : "hidden"}>Alvesta GIF Planbokning</h1>
        </div>
        <div className="nav-content">
            <DayPicker
                className={"day-picker-move-left " + (props.drawerIsOpen ? "" : "hidden")}
                showWeekNumbers
                showOutsideDays
                firstDayOfWeek={1}
                selectedDays={props.selectedDate}
                onDayClick={props.onChange} />

            <div onClick={handleLoginClick} className={"nav-item " + (props.isLoggedIn ? "hidden" : "")}>
                <i className="fa fa-sign-in nav-item-icon" />
                <p>Logga in</p>
            </div>

            <div onClick={handleLogoutClick} className={"nav-item " + (props.isLoggedIn ? "" : "hidden")}>
                <i className="fa fa-sign-out nav-item-icon" />
                <p>Logga ut</p>
            </div>

            <div className={"nav-item " + (props.isLoggedIn ? "" : "hidden")}>
                <i className="fa fa-user-check nav-item-icon" />
                <p>Administrera</p>
            </div>
        </div>
    </div>;
}