import React from "react";
import "./Event.css";

export const Event = (props) => {

    const divStyle = {
        height: props.height,
        top: props.topPos
    };

    return (
        <div style={divStyle} className="event-content">
            <h1>{props.team}</h1>
            <h2>{props.club}</h2>
            <p>{props.timeFrom} - {props.timeTo}</p>
        </div>
    );
}