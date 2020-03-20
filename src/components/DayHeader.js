import React, { useEffect } from "react";

const DayHeader = (props) => {
    useEffect(() => {
        document.querySelectorAll(".day-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
    });

    return (
        <div className="day-header">
            <div className="day-header-day-name">{props.dayName}</div>
            <div className="day-header-day-date">
                {props.date.getFullYear()}-
                {props.date.getMonth()+1 < 10 ? '0' : ''}{props.date.getMonth()+1}-
                {props.date.getDate() < 10 ? '0' :''}{props.date.getDate()}
            </div>
        </div>
    );
};

export default DayHeader;