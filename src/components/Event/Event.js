import React from "react";
import "./Event.css";

export const Event = (props) => {
    const divStyle = {
        height: props.height,
        top: props.top
    };
    
    return (
        <div style={divStyle} className="event-content">
            <h1>{props.team}</h1>
            <h3>{props.club}</h3>
            <p>{props.timeFrom.toTime()} - {props.timeTo.toTime()}</p>
        </div>
    );
}