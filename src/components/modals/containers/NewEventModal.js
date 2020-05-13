import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeNewEventModal
} from "../../../actions/modals";

import {
    postEvent,
    getEventsBetweenDates
} from "../../../actions/events";

import {
    getAvailableFieldSizes,
    clearAvailableFieldSizes
} from "../../../actions/fieldSizes";

import {
    getChangingroomsInbetween,
    clearAvailableChangingrooms
} from "../../../actions/changingrooms";

import NewEventModalPresenter from "../presenters/NewEventModal";

const NewEventModalContainer = ({
    dispatch
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const isHidden = useSelector(state => state.modal.newEventModalIsHidden);
    const isSignedIn = useSelector(state => state.login.isSignedIn);
    const availableChangingRooms = useSelector(state => state.changingroom.availableChangingRooms);
    const fields = useSelector(state => state.field.fields);
    const availableFieldSizes = useSelector(state => state.fieldSize.availableFieldSizes);
    const selectedDate = useSelector(state => state.date.selectedDate);
    
    const [recurringEventDateTo, setRecurringEventDateTo] = useState("");
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [selectedChangingRoomId, setSelectedChangingRoomId] = useState(-1);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [selectedFieldId, setSelectedFieldId] = useState(-1);
    const [selectedFieldSizeId, setSelectedFieldSizeId] = useState(-1);
    const [comment, setComment] = useState("");
    const [eventColor, setEventColor] = useState("");
    const [currentPrice, setCurrentPrice] = useState(0);

    const [newEventIsPosted, setNewEventIsPosted] = useState(false);

    useEffect(() => {
        clearInputData();
        
        if (newEventIsPosted) {
            const weekDateSpan = selectedDate.getWeekDateSpan();
            dispatch(getEventsBetweenDates(weekDateSpan.startDate, weekDateSpan.endDate));
            setNewEventIsPosted(false);
        };
    }, [isHidden]);

    const getFieldSizes = (date, timeFrom, timeTo, selectedFieldId) => {
        if (date != "" && timeFrom != "" && timeTo != "" && selectedFieldId != -1 && selectedFieldId != "") {
            dispatch(getAvailableFieldSizes(selectedFieldId, new Date(`${date}T${timeFrom}Z`), new Date(`${date}T${timeTo}Z`)));
        };
    };

    const getChangingRooms = (crTimeFrom, crTimeTo) => {
        if (date != "" && changingRoomTimeFrom != "" && changingRoomTimeTo != "") {
            dispatch(getChangingroomsInbetween(new Date(`${date}T${crTimeFrom}Z`), new Date(`${date}T${crTimeTo}Z`)));
        };
    };

    const clearInputData = () => {
        setRecurringEventDateTo("");
        setChangingRoomTimeFrom("");
        setChangingRoomTimeTo("");
        setSelectedChangingRoomId("");
        setName("");
        setEmail("");
        setTeam("");
        setClub("");
        setDate("");
        setTimeFrom("");
        setTimeTo("");
        setSelectedFieldId("");
        setSelectedFieldSizeId("");
        setComment("");
        setEventColor("");

        dispatch(clearAvailableFieldSizes());
        dispatch(clearAvailableChangingrooms());
    };

    const isValidNewEvent = () => {
        return name !== ""
                && email !== ""
                && club !== ""
                && team !== ""
                && date !== ""
                && timeFrom !== ""
                && timeTo !== ""
                && eventColor !== ""
                && selectedFieldId !== -1
                && selectedFieldSizeId !== -1;
    };

    const handleRecurringEventDateToChange = () => setRecurringEventDateTo(event.target.value);
    const handleOnChangingRoomTimeFromChange = () => setChangingRoomTimeFrom(event.target.value);
    const handleOnChangingRoomTimeToChange = () => setChangingRoomTimeTo(event.target.value);
    const handleOnChangingRoomIdChange = () => setSelectedChangingRoomId(event.target.value);
    const handleOnNameChange = () => setName(event.target.value);
    const handleOnEmailChange = () => setEmail(event.target.value);
    const handleOnTeamChange = () => setTeam(event.target.value);
    const handleOnClubChange = () => setClub(event.target.value);
    const handleOnTimeFromChange = () => setTimeFrom(event.target.value);
    const handleOnTimeToChange = () => setTimeTo(event.target.value);
    const handleOnCommentChange = () => setComment(event.target.value);
    const handleOnEventColorChange = color => setEventColor(color);
    const handleOnFieldSizeIdChange = () => setSelectedFieldSizeId(event.target.value);

    const handleOnDateChange = () => {
        setDate(event.target.value);
        getFieldSizes(event.target.value, timeFrom, timeTo, selectedFieldId);
    };

    const handleOnFieldIdChange = () => {
        setSelectedFieldId(event.target.value);
        getFieldSizes(date, timeFrom, timeTo, event.target.value);
    };

    const handleOnTimeLeave = () => {
        getFieldSizes(date, timeFrom, timeTo, selectedFieldId);
    };

    const handleOnChangingRoomTimeLeave = () => {
        getChangingRooms(changingRoomTimeFrom, changingRoomTimeTo);
    };

    const handleOnCloseClick = () => {
        dispatch(closeNewEventModal());
        clearInputData();
    };

    const handleOnSendNewBooking = () => {
        setNewEventIsPosted(true);
        
        dispatch(postEvent(
            name,
            email,
            club,
            team,
            timeFrom,
            timeTo,
            date,
            recurringEventDateTo,
            comment,
            eventColor,
            selectedFieldId,
            selectedFieldSizeId,
            selectedChangingRoomId,
            changingRoomTimeFrom,
            changingRoomTimeTo));
    };

    return <NewEventModalPresenter
                isHidden={isHidden}
                showAdminOptions={isSignedIn}
                recurringEventDateTo={recurringEventDateTo}
                onRecurringEventDateToChange={handleRecurringEventDateToChange}
                changingRoomTimeFrom={changingRoomTimeFrom}
                onChangingRoomTimeFromChange={handleOnChangingRoomTimeFromChange}
                changingRoomTimeTo={changingRoomTimeTo}
                onChangingRoomTimeToChange={handleOnChangingRoomTimeToChange}
                onChangingRoomTimeLeave={handleOnChangingRoomTimeLeave}
                changingRoomSelectIsDisabled={availableChangingRooms == null || availableChangingRooms.length <= 0}
                selectedChangingRoomId={selectedChangingRoomId}
                onChangingRoomIdChange={handleOnChangingRoomIdChange}
                availableChangingRooms={availableChangingRooms}
                
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
                selectedFieldId={selectedFieldId}
                onFieldIdChange={handleOnFieldIdChange}
                availableFields={fields}
                fieldSizeIsDisabled={availableFieldSizes == null || availableFieldSizes.length <= 0}
                selectedFieldSizeId={selectedFieldSizeId}
                onFieldSizeChange={handleOnFieldSizeIdChange}
                availableFieldSizes={availableFieldSizes}
                comment={comment}
                onCommentChange={handleOnCommentChange}
                colors={COLORS}
                eventColor={eventColor}
                onEventColorChange={handleOnEventColorChange}
                currentPrice={currentPrice}
                onCloseClick={handleOnCloseClick}
                submitButtonDisabled={!isValidNewEvent()}
                onSendNewBooking={handleOnSendNewBooking} />
};

export default connect()(NewEventModalContainer);
