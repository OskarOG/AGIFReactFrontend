import React, { useState } from "react";

import "react-day-picker/lib/style.css";

import "./Navigation.css";

import DayPicker from "react-day-picker";

export const Navigation = (props) => {
    return <div className="navigation">
        <div className="nav-slide-controlls">
            <i className="fa fa-bars bar-icon"></i>
            <i className="fa fa-times close-icon"></i>
        </div>
        <div className="nav-title title">
            <img src="./imgs/agif-logo-small.png" height="42" widht="42" />
            <h1>Alvesta GIF Planbokning</h1>
        </div>

        <DayPicker
            className="day-picker-move-left"
            showWeekNumbers
            showOutsideDays
            firstDayOfWeek={1}
            selectedDays={props.selectedDate}
            onDayClick={props.onChange} />
    </div>;
}