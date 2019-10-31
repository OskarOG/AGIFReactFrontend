import React from "react";
import "./Event.css";

const Event = (props) => {
    const divStyle = {
        width: props.divide ? "74px" : "150px",
        height: props.height,
        top: props.top,
        marginLeft: props.shouldBeRight ? "75px" : "0px",
        marginRight: props.divide ? "1px" : "0"
    };

    const headerStyle = {
        backgroundColor: props.eventColor
    };

    return (
        <div style={divStyle} className="event-content" onDoubleClick={props.onEventClick}>
            <h1 style={headerStyle}>{props.team}</h1>
            <h3>{props.club}</h3>
            <p>
                {props.fieldSize}-manna<br />
                {props.timeFrom.toTime()}-{props.timeTo.toTime()}
            </p>
        </div>
    );
};

export default Event;