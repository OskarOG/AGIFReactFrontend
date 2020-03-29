import React, { useState } from "react";
import { useSelector, connect } from "react-redux";

import {
    closeNewEventModal
} from "../../../actions/modals";

import {
    postEvent
} from "../../../actions/events";

import NewEventModalPresenter from "../presenters/NewEventModal";

const NewEventModalContainer = ({
    dispatch
}) => {
    const COLORS = useSelector(state => state.color.colors);
    const isHidden = useSelector(state => state.modal.newEventModalIsHidden);
    const isAdmin = useSelector(state => state.admin.isAdmin);
    const availableChangingRooms = useSelector(state => state.changingroom.availableChangingRooms);
    const availableFields = useSelector(state => state.field.availableFields);
    const availableFieldSizes = useSelector(state => state.fieldSize.availableFieldSizes);
    
    const [recurringEventDateTo, setRecurringEventDateTo] = useState("");
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [changingRoomSelectIsDisabled, setChangingRoomSelectIsDisabled] = useState(true);
    const [selectedChangingRoomId, setSelectedChangingRoomId] = useState(-1);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [selectedFieldId, setSelectedFieldId] = useState(-1);
    const [fieldSizeIsDisabled, setFieldSizeIsDisabled] = useState(true);
    const [selectedFieldSizeId, setSelectedFieldSizeId] = useState(-1);
    const [comment, setComment] = useState("");
    const [eventColor, setEventColor] = useState("");
    const [currentPrice, setCurrentPrice] = useState(0);

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    const handleRecurringEventDateToChange = () => setRecurringEventDateTo(event.target.value);
    const handleOnChangingRoomTimeFromChange = () => setChangingRoomTimeFrom(event.target.value);
    const handleOnChangingRoomTimeToChange = () => setChangingRoomTimeTo(event.target.value);
    const handleOnChangingRoomIdChange = () => setSelectedChangingRoomId(event.target.value);
    const handleOnNameChange = () => setName(event.target.value);
    const handleOnEmailChange = () => setEmail(event.target.value);
    const handleOnTeamChange = () => setTeam(event.target.value);
    const handleOnClubChange = () => setClub(event.target.value);
    const handleOnDateChange = () => setDate(event.target.value);
    const handleOnTimeFromChange = () => setTimeFrom(event.target.value);
    const handleOnTimeToChange = () => setTimeTo(event.target.value);
    const handleOnFieldIdChange = () => setSelectedFieldId(event.target.value);
    const handleOnFieldSizeIdChange = () => setSelectedFieldSizeId(event.target.value);
    const handleOnCommentChange = () => setComment(event.target.value);
    const handleOnEventColorChange = () => setEventColor(event.target.value);

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
    };

    const handleOnTimeLeave = () => {
        // TODO: Fetch available fields and fieldsizes.
    };

    const handleOnChangingRoomTimeLeave = () => {
        // TODO: Fetch available changingrooms.
    };

    const handleOnCloseClick = () => {
        dispatch(closeNewEventModal());
        clearInputData();
    };

    const handleOnSendNewBooking = () => {
        dispatch(postEvent(
            name,
            email,
            club,
            team,
            timeFrom,
            timeTo,
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
                showAdminOptions={isAdmin}
                recurringEventDateTo={recurringEventDateTo}
                onRecurringEventDateToChange={handleRecurringEventDateToChange}
                changingRoomTimeFrom={changingRoomTimeFrom}
                onChangingRoomTimeFromChange={handleOnChangingRoomTimeFromChange}
                changingRoomTimeTo={changingRoomTimeTo}
                onChangingRoomTimeToChange={handleOnChangingRoomTimeToChange}
                onChangingRoomTimeLeave={handleOnChangingRoomTimeLeave}
                changingRoomSelectIsDisabled={changingRoomSelectIsDisabled}
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
                availableFields={availableFields}
                fieldSizeIsDisabled={fieldSizeIsDisabled}
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
                submitButtonDisabled={false} //submitButtonDisabled
                onSendNewBooking={handleOnSendNewBooking} />
};

export default connect()(NewEventModalContainer);
