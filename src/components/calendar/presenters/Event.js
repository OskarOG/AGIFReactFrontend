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
    changingRoomName,
    changingRoomTimeFrom,
    changingRoomTimeTo
}) => {
    const divStyle = {
        width: divide ? "149px" : "300px",
        height: height,
        top: top,
        marginLeft: shouldBeRight ? "75px" : "0px",
        marginRight: divide ? "1px" : "0"
    };

    const headerStyle = {
        backgroundColor: isApproved ? eventColor : "rgb(217, 109, 109)"
    };

    const changingRoomSpanStyle = {
        display: changingRoomTimeFrom !== null && changingRoomTimeTo !== null ? "" : "none"
    };

    return (
        <div style={divStyle} className="event-content" onDoubleClick={onEventClick}>
            <h1 style={headerStyle}>{team}</h1>
            <h3>{club}</h3>
            <p>
                {fieldSize}-manna<br />
                {timeFrom.toTime()}-{timeTo.toTime()}<br />
                <span style={changingRoomSpanStyle}>
                    {changingRoomName}<br />
                    {changingRoomTimeFrom?.toTime()}<br />
                    {changingRoomTimeTo?.toTime()}<br />
                </span>
            </p>
        </div>
    );
};

export default EventPresenter;
