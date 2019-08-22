import React from "react";
import "./DayHeader.css";

export const DayHeader = (props) => {
    return (
        <div className="day-header">
            <div className="day-header-day-name">{props.dayName}</div>
            <div className="day-header-day-date">{props.date.getFullYear()}-{props.date.getMonth()+1 < 10 ? '0' : ''}{props.date.getMonth()+1}-{props.date.getDate() < 10 ? '0' :''}{props.date.getDate()}</div>
        </div>
    );
}
