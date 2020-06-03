import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    getChangingroomsInbetween
} from "../../../actions/changingrooms";

import {
    setCurrentHandledNonApprovedEventId
} from "../../../actions/nonApprovedEvents";

import NonApprovedEventPresenter from "../presenters/NonApprovedEvent";

const NonApprovedEventContainer = ({
    dispatch,
    event
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const availableChangingRooms = useSelector(state => state.changingroom.availableChangingRooms);
    const currentHandledNonApprovedEventId = useSelector(state => state.nonApprovedEvent.currentHandledNonApprovedEventId);

    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [eventColor, setEventColor] = useState(event.EventColor);

    const [isCurrentHandledEvent, setIsCurrentHandeledEvent] = useState(false);

    useEffect(() => {
        setIsCurrentHandeledEvent(currentHandledNonApprovedEventId == event.Id);

        if (currentHandledNonApprovedEventId != event.Id) {
            setChangingRoomTimeFrom("");
            setChangingRoomTimeTo("");
        };

    }, [availableChangingRooms]);

    const handleChangingRoomTimeFromChange = e => {
        setChangingRoomTimeFrom(e.target.value);
    };

    const handleChangingRoomTimeBlur = () => {
        if (changingRoomTimeFrom !== "" && changingRoomTimeTo !== "") {
            const year = event.TimeFrom.getFullYear();
            const month = event.TimeFrom.getMonth() + 1;
            const day = event.TimeFrom.getDate();
            
            const from = new Date(`${year}-${month}-${day} ${changingRoomTimeFrom}`);
            const to = new Date(`${year}-${month}-${day} ${changingRoomTimeTo}`);
            
            dispatch(setCurrentHandledNonApprovedEventId(event.Id));
            dispatch(getChangingroomsInbetween(from, to));
        };
    };

    const handleChangingRoomTimeToChange = e => {
        setChangingRoomTimeTo(e.target.value);
    };

    const handleChangingRoomSelectedIdChange = id => {
        setChangingRoomSelectedId(id);
    };

    const handleColorChange = id => {
        setEventColor(id);
    };

    const handleOnSendApprove = () => {
        // TODO: Dispatch approve event
    };

    const handleOnSendDecline = () => {
        // TODO: Dispatch decline event
    };

    return <NonApprovedEventPresenter
                colors={COLORS}
                eventId={event.Id}
                team={event.Team}
                club={event.Club}
                name={event.Name}
                email={event.Email}
                fieldName={event.FieldName}
                fieldSize={event.FieldSize}
                weekDay={event.TimeFrom.getDay()}
                date={event.TimeFrom.toLocaleDateString()}
                timeFrom={event.TimeFrom.toLocaleTimeString()}
                timeTo={event.TimeTo.toLocaleTimeString()}
                comment={event.Comment}
                changingRoomTimeFrom={changingRoomTimeFrom}
                onChangingRoomTimeFromChange={handleChangingRoomTimeFromChange}
                changingRoomTimeTo={changingRoomTimeTo}
                onChangingRoomTimeToChange={handleChangingRoomTimeToChange}
                onChangingRoomTimeBlur={handleChangingRoomTimeBlur}
                changingRooms={availableChangingRooms}
                onChangingRoomIdChange={handleChangingRoomSelectedIdChange}
                eventColor={eventColor}
                onColorChange={handleColorChange}
                isCurrentHandeledEvent={isCurrentHandledEvent}
                onSendApprove={handleOnSendApprove}
                onSendDecline={handleOnSendDecline} />
};

export default connect()(NonApprovedEventContainer);