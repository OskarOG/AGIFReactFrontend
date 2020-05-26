import React, { useState } from "react";
import { useSelector } from "react-redux";

import NonApprovedEventPresenter from "../presenters/NonApprovedEvent";

const NonApprovedEventContainer = ({
    event
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const availableChangingRooms = useSelector(state => state.modal.nonApprovedEvents);

    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [changingRoomSelectedId, setChangingRoomSelectedId] = useState(-1);
    const [eventIsApproved, setEventIsApproved] = useState(false);
    const [eventIsDeclined, setEventIsDeclined] = useState(false);

    const handleChangingRoomTimeFromChange = changingRoomFrom => {
        setChangingRoomTimeFrom(changingRoomFrom);
    };

    const handleChangingRoomTimeFromBlur = () => {
        // Fetch available changingrooms from API.
    };

    const handleChangingRoomTimeToChange = changingRoomTo => {
        setChangingRoomTimeTo(changingRoomTo);
    };

    const handleChangingRoomTimeToBlur = () => {
        // Dispatch availablerooms to redux
    };

    const handleChangingRoomSelectedIdChange = id => {
        setChangingRoomSelectedId(id);
    };

    const handleColorChange = id => {
        // Update color change somehow
    };

    const handleIsApproveClick = () => {
        setEventIsApproved(true);
        setEventIsDeclined(false);

        // Dispatch approve and remove decline
    };

    const handleIsDeclinedClick = () => {
        setEventIsDeclined(true);
        setEventIsApproved(false);

        // Dispatch decline and remove approve
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
                changingRoomTimeFrom={changingRoomTimeFrom !== "" ? changingRoomTimeFrom.toLocaleTimeString() : ""}
                onChangingRoomTimeFromChange={handleChangingRoomTimeFromChange}
                onChangingRoomTimeFromBlur={handleChangingRoomTimeFromBlur}
                changingRoomTimeTo={changingRoomTimeTo !== "" ? changingRoomTimeTo.toLocaleTimeString() : ""}
                onChangingRoomTimeToChange={handleChangingRoomTimeToChange}
                onChangingRoomTimeToBlur={handleChangingRoomTimeToBlur}
                changingRooms={availableChangingRooms}
                onChangingRoomIdChange={handleChangingRoomSelectedIdChange}
                eventColor={event.Color}
                onColorChange={handleColorChange}
                isApproved={eventIsApproved}
                onIsApproveClick={handleIsApproveClick}
                isDeclined={eventIsDeclined}
                onIsDeclinedClick={handleIsDeclinedClick} />
};

export default NonApprovedEventContainer;
