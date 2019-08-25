import React from "react";
import "./Event.css";

export const Event = (props) => {
    const divStyle = {
        width: props.divide ? "74px" : "150px",
        height: props.height,
        top: props.top,
        marginLeft: props.shouldBeRight ? "75px" : "0px",
        marginRight: props.divide ? "1px" : "0"
    };
    
    return (
        <div style={divStyle} className="event-content">
            <h1>{props.team}</h1>
            <h3>{props.club}</h3>
            <p>
                {props.fieldSize}-manna<br />
                {props.timeFrom.toTime()}-{props.timeTo.toTime()}
            </p>
        </div>
    );
}