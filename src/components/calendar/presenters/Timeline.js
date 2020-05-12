import React from "react";

const TimelinePresenter = ({
    top,
    shiftRight
}) => {
    return <div style={{ top: top }}
                className={"timeline " + 
                    (shiftRight 
                        ? "timeline-shift-if-drawer-open" 
                        : "timeline-shift-if-drawer-closed")}>
            </div>;
};

export default TimelinePresenter;
