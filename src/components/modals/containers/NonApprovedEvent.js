import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    getChangingroomsInbetween
} from "../../../actions/changingrooms";

import {
    setCurrentHandledNonApprovedEventId,
    approveEvent
} from "../../../actions/nonApprovedEvents";

import NonApprovedEventPresenter from "../presenters/NonApprovedEvent";

const NonApprovedEventContainer = ({
    dispatch,
    event
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const availableChangingRooms = useSelector(state => state.changingroom.availableChangingRooms);
    const currentHandledNonApprovedEventId = useSelector(state => state.nonApprovedEvent.currentHandledNonApprovedEventId);

    const [selectedChangingRoomId, setSelectedChangingRoomId] = useState(-1);
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [eventColor, setEventColor] = useState(event.EventColor);

    const [isCurrentHandledEvent, setIsCurrentHandeledEvent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsCurrentHandeledEvent(currentHandledNonApprovedEventId == event.Id);

        if (currentHandledNonApprovedEventId != event.Id) {
            setChangingRoomTimeFrom("");
            setChangingRoomTimeTo("");
        };

    }, [availableChangingRooms]);

    const getEventApprovalObject = isApproved => {
        const year = event.TimeFrom.getFullYear();
        const month = event.TimeFrom.getMonth() + 1;
        const day = event.TimeFrom.getDate();

        return {
            Id: event.Id,
            IsApproved: isApproved,
            Color: eventColor,
            ChangingRoomId: selectedChangingRoomId,
            ChangingRoomTimeFrom: new Date(`${year}-${month}-${day} ${changingRoomTimeFrom}`).getUnixTimestamp(),
            ChangingRoomTimeTo: new Date(`${year}-${month}-${day} ${changingRoomTimeTo}`).getUnixTimestamp()
        };
    };

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

    const handleChangingRoomSelectedIdChange = e => {
        setSelectedChangingRoomId(e.target.value);
    };

    const handleColorChange = id => {
        setEventColor(id);
    };

    const handleOnSendApprove = () => {
        setIsLoading(true);
        dispatch(approveEvent(getEventApprovalObject(true),
        () => setIsLoading(false),
        () => setIsLoading(false)));
    };

    const handleOnSendDecline = () => {
        setIsLoading(true);
        dispatch(approveEvent(getEventApprovalObject(false),
        () => setIsLoading(false),
        () => setIsLoading(false)));
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
                selectedChangingRoomId={selectedChangingRoomId}
                onChangingRoomIdChange={handleChangingRoomSelectedIdChange}
                eventColor={eventColor}
                onColorChange={handleColorChange}
                isCurrentHandeledEvent={isCurrentHandledEvent}
                onSendApprove={handleOnSendApprove}
                onSendDecline={handleOnSendDecline}
                isLoading={isLoading} />
};

export default connect()(NonApprovedEventContainer);