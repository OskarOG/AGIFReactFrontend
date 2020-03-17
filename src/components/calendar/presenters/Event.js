import React from "react";

const EventPresenter = ({
    divide,
    height,
    top,
    shouldBeRight,
    isApproved,
    eventColor,
    onEventClick,
    team,
    club,
    fieldSize,
    timeFrom,
    timeTo,
    changingRoomName
}) => {
    const divStyle = {
        width: divide ? "74px" : "150px",
        height: height,
        top: top,
        marginLeft: shouldBeRight ? "75px" : "0px",
        marginRight: divide ? "1px" : "0"
    };

    const headerStyle = {
        backgroundColor: isApproved ? eventColor : "rgb(217, 109, 109)"
    };

    return (
        <div style={divStyle} className="event-content" onDoubleClick={onEventClick}>
            <h1 style={headerStyle}>{team}</h1>
            <h3>{club}</h3>
            <p>
                {fieldSize}-manna<br />
                {timeFrom.toTime()}-{timeTo.toTime()}<br />
                {changingRoomName}<br />
            </p>
        </div>
    );
};

export default EventPresenter;
