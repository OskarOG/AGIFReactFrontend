import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeAlterEventModal
} from "../../../actions/modals";

import AlterEventModalPresenter from "../presenters/AlterEventModal";

const AlterEventModalContainer = ({
    dispatch
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const alterEventModalIsHidden = useSelector(state => state.modal.alterEventModalIsHidden);
    const selectedEvent = useSelector(state => state.event.selectedEvent);
    const availableFields = useSelector(state => state.field.fields);
    const availableChangingRooms = useSelector(state => state.changingroom.availableChangingRooms);
    const availableFieldSizes = useSelector(state => state.fieldSize.availableFieldSizes);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [selectedFieldId, setSelectedFieldId] = useState(-1); // TODO: Show current selected
    const [selectedFieldSizeId, setSelectedFieldSizeId] = useState(-1); // TODO: Show current selected
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [selectedChangingRoomId, setSelectedChangingRoomId] = useState(-1); // TODO: Show current selected
    const [comment, setComment] = useState("");
    const [selectedEventColor, setSelectedEventColor] = useState("");

    useEffect(() => {
        if (alterEventModalIsHidden) {
            return;
        }

        setName(selectedEvent.Name);
        setEmail(selectedEvent.Email);
        setTeam(selectedEvent.Team);
        setClub(selectedEvent.Club);
        setDate(getDateString(selectedEvent));
        setTimeFrom(getTimeString(selectedEvent.TimeFrom.getHours(), selectedEvent.TimeFrom.getMinutes()));
        setTimeTo(getTimeString(selectedEvent.TimeTo.getHours(), selectedEvent.TimeTo.getMinutes()));
        setSelectedFieldId(-1); // TODO: Show current selected
        setSelectedFieldSizeId(-1); // TODO: Show current selected
        setChangingRoomTimeFrom(getTimeString(selectedEvent.ChangingRoomTimeFrom.getHours(), selectedEvent.ChangingRoomTimeFrom.getMinutes()));
        setChangingRoomTimeTo(getTimeString(selectedEvent.ChangingRoomTimeTo.getHours(), selectedEvent.ChangingRoomTimeTo.getMinutes()));
        setSelectedChangingRoomId(-1); // TODO: Show current selected
        setComment(selectedEvent.Comment);
        setSelectedEventColor(selectedEvent.EventColor);
    }, [alterEventModalIsHidden]);

    const clearInputData = () => {
        setName("");
        setEmail("");
        setTeam("");
        setClub("");
        setDate("");
        setTimeFrom("");
        setTimeTo("");
        setSelectedFieldId(-1); // TODO: Show current selected
        setSelectedFieldSizeId(-1); // TODO: Show current selected
        setChangingRoomTimeFrom("");
        setChangingRoomTimeTo("");
        setSelectedChangingRoomId(-1); // TODO: Show current selected
        setComment("");
        setSelectedEventColor("");
    };

    const handleOnNameChange = () => {
        setName(event.target.value);
    };

    const handleOnEmailChange = () => {
        setEmail(event.target.value);
    };

    const handleOnTeamChange = () => {
        setTeam(event.target.value);
    };

    const handleOnClubChange = () => {
        setClub(event.target.value);
    };

    const handleOnDateChange = () => {
        setDate(event.target.value);
    };

    const handleOnTimeFromChange = () => {
        setTimeFrom(event.target.value);
    };

    const handleOnTimeFromLeave = () => {
        // TODO: Get available field and changingrooms.
    };

    const handleOnTimeToChange = () => {
        setTimeTo(event.target.value);
    };

    const handleOnTimeToLeave = () => {
        // TODO: Get available field and changingrooms.
    };

    const handleOnSelectedFieldIdChange = () => {
        setSelectedFieldId(event.target.value);
    };

    const handleOnSelectedFieldSizeIdChange = () => {
        setSelectedFieldSizeId(event.target.value);
    };

    const handleOnChangingRoomTimeFromChange = () => {
        setChangingRoomTimeFrom(event.target.value);
    };

    const handleOnChangingRoomTimeToChange = () => {
        setChangingRoomTimeTo(event.target.value);
    };

    const handleOnChangingRoomIdChange = () => {
        setSelectedChangingRoomId(event.target.value);
    };

    const handleOnCommentChange = () => {
        setComment(event.target.value);
    };

    const handleOnColorChange = (color) => {
        setSelectedEventColor(color);
    };

    const handleCloseClick = () => {
        dispatch(closeAlterEventModal());
        clearInputData();
    };

    const handleDeleteClick = () => {
        // TODO: Show confirm box and then delete.
    };

    const handleUpdateClick = () => {
        // TODO: Dispatch update click with all the data. Then close modal.
    };

    return <AlterEventModalPresenter
                COLORS={COLORS}
                isHidden={alterEventModalIsHidden}
                name={name}
                onNameChange={handleOnNameChange}
                email={email}
                onEmailChange={handleOnEmailChange}
                team={team}
                onTeamChange={handleOnTeamChange}
                club={club}
                onClubChange={handleOnClubChange}
                date={date}
                onDateChange={handleOnDateChange}
                timeFrom={timeFrom}
                onTimeFromChange={handleOnTimeFromChange}
                onTimeFromLeave={handleOnTimeFromLeave}
                timeTo={timeTo}
                onTimeToChange={handleOnTimeToChange}
                onTimeToLeave={handleOnTimeToLeave}
                selectedField={selectedFieldId}
                onSelectedFieldChange={handleOnSelectedFieldIdChange}
                availableFields={availableFields}
                selectedFieldSize={selectedFieldSizeId}
                onSelectedFieldSizeChange={handleOnSelectedFieldSizeIdChange}
                availableFieldSizes={availableFieldSizes}
                changingRoomTimeFrom={changingRoomTimeFrom}
                onChangingRoomTimeFromChange={handleOnChangingRoomTimeFromChange}
                changingRoomTimeTo={changingRoomTimeTo}
                onChangingRoomTimeToChange={handleOnChangingRoomTimeToChange}
                selectedChangingRoom={selectedChangingRoomId}
                onChangingRoomChange={handleOnChangingRoomIdChange}
                availableChangingRooms={availableChangingRooms}
                comment={comment}
                onCommentChange={handleOnCommentChange}
                selectedEventColor={selectedEventColor}
                onColorChange={handleOnColorChange}
                onClose={handleCloseClick}
                onDelete={handleDeleteClick}
                onUpdateBookingClick={handleUpdateClick} />
};

const getDateString = (event) => {
    const year = event.TimeFrom.getFullYear();
    const month = event.TimeFrom.getMonth() + 1;
    const day = event.TimeFrom.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
};

const getTimeString = (hours, mins) => {
    return `${hours < 10 ? "0" + hours : hours}:${mins < 10 ? "0" + mins : mins}`;
};

export default connect()(AlterEventModalContainer);
