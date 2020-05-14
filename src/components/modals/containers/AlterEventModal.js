import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeAlterEventModal
} from "../../../actions/modals";

import {
    getAvailableFieldSizes
} from "../../../actions/fieldSizes";

import {
    getChangingroomsInbetween
} from "../../../actions/changingrooms";

import AlterEventModalPresenter from "../presenters/AlterEventModal";
import { getEventsBetweenDates, deleteEvent } from "../../../actions/events";

const AlterEventModalContainer = ({
    dispatch
}) => {
    const selectedDate = useSelector(state => state.date.selectedDate);
    const [eventIsUpdated, setEventIsUpdated] = useState(false);

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
    const [selectedFieldId, setSelectedFieldId] = useState(-1);
    const [selectedFieldSizeId, setSelectedFieldSizeId] = useState(-1);
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [selectedChangingRoomId, setSelectedChangingRoomId] = useState(-1);
    const [comment, setComment] = useState("");
    const [selectedEventColor, setSelectedEventColor] = useState("");

    const handleOnNameChange = () => setName(event.target.value);
    const handleOnEmailChange = () => setEmail(event.target.value);
    const handleOnTeamChange = () => setTeam(event.target.value);
    const handleOnClubChange = () => setClub(event.target.value);
    const handleOnTimeFromChange = () => setTimeFrom(event.target.value);
    const handleOnTimeToChange = () => setTimeTo(event.target.value);
    const handleOnSelectedFieldSizeIdChange = () => setSelectedFieldSizeId(event.target.value);
    const handleOnChangingRoomTimeFromChange = () => setChangingRoomTimeFrom(event.target.value);
    const handleOnChangingRoomTimeToChange = () => setChangingRoomTimeTo(event.target.value);
    const handleOnChangingRoomIdChange = () => setSelectedChangingRoomId(event.target.value);
    const handleOnCommentChange = () => setComment(event.target.value);
    const handleOnColorChange = (color) => setSelectedEventColor(color);

    useEffect(() => {
        if (eventIsUpdated) {
            const weekDaySpan = selectedDate.getWeekDateSpan();
            dispatch(getEventsBetweenDates(weekDaySpan.startDate, weekDaySpan.endDate));
            setEventIsUpdated(false);
        } else if (!alterEventModalIsHidden) {
            initializeData();  
        };
    }, [alterEventModalIsHidden]);

    const initializeData = () => {
        const eventDateString = getDateString(selectedEvent);
        const eventTimeFrom = getTimeString(selectedEvent.TimeFrom.getHours(), selectedEvent.TimeFrom.getMinutes());
        const eventTimeTo = getTimeString(selectedEvent.TimeTo.getHours(), selectedEvent.TimeTo.getMinutes());

        setName(selectedEvent.Name);
        setEmail(selectedEvent.Email);
        setTeam(selectedEvent.Team);
        setClub(selectedEvent.Club);
        setDate(eventDateString);
        setTimeFrom(eventTimeFrom);
        setTimeTo(eventTimeTo);
        setSelectedFieldId(selectedEvent.FieldID);
        setSelectedFieldSizeId(-1);
        setComment(selectedEvent.Comment);
        setSelectedEventColor(selectedEvent.EventColor);
        
        if (selectedEvent.changingRoomTimeFrom != null && selectedEvent.changingRoomTimeTo != null) {
            const eventCRTimeFrom = getTimeString(selectedEvent.ChangingRoomTimeFrom.getHours(), selectedEvent.ChangingRoomTimeFrom.getMinutes());
            const eventCRTimeTo = getTimeString(selectedEvent.ChangingRoomTimeTo.getHours(), selectedEvent.ChangingRoomTimeTo.getMinutes());

            setChangingRoomTimeFrom(eventCRTimeFrom);
            setChangingRoomTimeTo(eventCRTimeTo);
            setSelectedChangingRoomId(selectedEvent.ChangingRoomID);
            getChangingRooms(eventDateString, eventCRTimeFrom, eventCRTimeTo);
        };

        getFieldSizes(eventDateString, eventTimeFrom, eventTimeTo, selectedEvent.FieldID);
    };

    const clearInputData = () => {
        setName("");
        setEmail("");
        setTeam("");
        setClub("");
        setDate("");
        setTimeFrom("");
        setTimeTo("");
        setSelectedFieldId(-1);
        setSelectedFieldSizeId(-1);
        setChangingRoomTimeFrom("");
        setChangingRoomTimeTo("");
        setSelectedChangingRoomId(-1);
        setComment("");
        setSelectedEventColor("");

        // dispatch clear changingrooms
        // dispatch clear field sizes
        // dispatch clear selectedEvent
    };

    const getFieldSizes = (date, timeFrom, timeTo, selectedFieldId) => {
        if (date != "" && timeFrom != "" && timeTo != "" && selectedFieldId != -1 && selectedFieldId != "") {
            dispatch(getAvailableFieldSizes(selectedFieldId, new Date(`${date}T${timeFrom}Z`), new Date(`${date}T${timeTo}Z`)));
        };
    };

    const getChangingRooms = (date, crTimeFrom, crTimeTo) => {
        if (date != "" && changingRoomTimeFrom != "" && changingRoomTimeTo != "") {
            dispatch(getChangingroomsInbetween(new Date(`${date}T${crTimeFrom}Z`), new Date(`${date}T${crTimeTo}Z`)));
        };
    };

    const handleOnSelectedFieldIdChange = () => {
        setSelectedFieldId(event.target.value);
        getFieldSizes(date, timeFrom, timeTo, event.target.value);
    };

    const handleOnDateChange = () => {
        setDate(event.target.value);
        getFieldSizes(event.target.value, timeFrom, timeTo, selectedFieldId);
        getChangingRooms(event.target.value, changingRoomTimeFrom, changingRoomTimeTo);
    };

    const handleOnTimeLeave = () => {
        getFieldSizes(date, timeFrom, timeTo, selectedFieldId);
    };

    const handleOnChangingRoomTimeLeave = () => {
        getChangingRooms(date, changingRoomTimeFrom, changingRoomTimeTo);
    };

    const handleCloseClick = () => {
        dispatch(closeAlterEventModal());
        clearInputData();
    };

    const handleDeleteClick = () => {
        setEventIsUpdated(true);
        dispatch(deleteEvent(selectedEvent.Id));
    };

    const handleUpdateClick = () => {
        // TODO: Dispatch update click with all the data. Then close modal.
        setEventIsUpdated(true);

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
                timeTo={timeTo}
                onTimeToChange={handleOnTimeToChange}
                onTimeLeave={handleOnTimeLeave}
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
                onChangingRoomTimeLeave={handleOnChangingRoomTimeLeave}
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
