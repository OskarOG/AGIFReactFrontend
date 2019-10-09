import React from "react";
import "./Timeline.css";

const Timeline = (props) => {
    return <div style={{ top: props.top }} className={"timeline " + (props.shiftRight ? "timeline-shift-if-drawer-open" : "timeline-shift-if-drawer-closed")}></div>;
};

export default Timeline;