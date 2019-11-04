import React, { useState } from 'react';

import API from "../../../helpers/Api";

import './NewEventModal.css';

// import { CirclePicker } from "react-color";

import ColorPicker from "../../ColorPicker/ColorPicker.js";

const NewEventModal = (props) => {
    const colors = [
        { color: "#009b62", text: "AGIF bokning" }, 
        { color: "#d5cb72", text: "Extern bokning" }, 
        { color: "#9c83c3", text: "Speciell bokning" }, 
        { color: "#d96d6d", text: "Preliminär bokning" }];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [selectedField, setSelectedField] = useState(0);
    const [selectedFieldSize, setSelectedFieldSize] = useState(0);
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [comment, setComment] = useState("");
    const [currentPrice, setCurrentPrice] = useState(0);
    const [eventColor, setEventColor] = useState("");

    const [fieldSizes, setFieldSizes] = useState([]);

    const [fieldSizeIsDisabled, setFieldSizeIsDisabled] = useState(true);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    const updateFieldSizes = (selectedDate, selectedTimeFrom, selectedTimeTo, fieldId) => {
        setFieldSizeIsDisabled(true);
        setSubmitButtonDisabled(true);

        if (selectedDate != "" && selectedTimeFrom != "" && selectedTimeTo != "" && fieldId != 0) {
            var tempDateFrom = new Date(selectedDate + " " + selectedTimeFrom);
            var tempDateTo = new Date(selectedDate + " " + selectedTimeTo);

            API.fields().getFieldSizes(fieldId, tempDateFrom.getUnixTimestamp(), tempDateTo.getUnixTimestamp()).then(res => {
                console.log(res);
                setFieldSizes(res.data);

                setFieldSizeIsDisabled(false);
                setSubmitButtonDisabled(false);
            });
        }
    };

    const handleNameChange = () => {
        setName(event.target.value);
    };

    const handleEmailChange = () => {
        setEmail(event.target.value);
    };

    const handleTeamChange = () => {
        setTeam(event.target.value);
    };

    const handleClubChange = () => {
        setClub(event.target.value);
    };

    const handleFieldChange = () => {
        setSelectedField(event.target.value);

        updateFieldSizes(date, timeFrom, timeTo, event.target.value);
    };

    const handleFieldSizeChange = () => {
        setSelectedFieldSize(event.target.value);
    };

    const handleDateChange = () => {
        setDate(event.target.value);

        updateFieldSizes(event.target.value, timeFrom, timeTo, selectedField);
    };

    const handleTimeFromChange = () => {
        setTimeFrom(event.target.value);
    };

    const handleTimeToChange = () => {
        setTimeTo(event.target.value);
    };

    const handleTimeLeave = () => {
        updateFieldSizes(date, timeFrom, timeTo, selectedField);
    };

    const handleEventColorChange = (color) => {
        setEventColor(color);
    };

    const handleCommentChange = () => {
        setComment(event.target.value);
    };

    const clearFieldInfo = () => {
        setSelectedField(0);
        setSelectedFieldSize(0);
        setCurrentPrice(0);
        setFieldSizes([]);
        setFieldSizeIsDisabled(true);
        setSubmitButtonDisabled(true);
    };

    const handleCloseButton = () => {
        props.close();

        setName("");
        setEmail("");
        setTeam("");
        setClub("");
        setSelectedField(0);
        setSelectedFieldSize(0);
        setDate("");
        setTimeFrom("");
        setTimeTo("");
        setComment("");
        setCurrentPrice(0);
        setFieldSizes([]);
        setFieldSizeIsDisabled(true);
        setSubmitButtonDisabled(true);
        setEventColor("");
    };

    const handleSendNewBooking = () => {
        if (props.showAdminOptions) {
            API.events().postEvent({
                "Name": name,
                "Email": email,
                "Club": club,
                "Team": team,
                "TimeFrom": new Date(date + " " + timeFrom).getUnixTimestamp(),
                "TimeTo": new Date(date + " " + timeTo).getUnixTimestamp(),
                "Comment": comment,
                "FieldID": selectedField,
                "FieldSizeID": selectedFieldSize,
                "EventColor": eventColor,
                "UserKey": props.userKey
            }).then(res => {
                // TODO: Show posted message
                console.log(res);
            });
        } else {
            API.events().postEvent({
                "Name": name,
                "Email": email,
                "Club": club,
                "Team": team,
                "TimeFrom": new Date(date + " " + timeFrom).getUnixTimestamp(),
                "TimeTo": new Date(date + " " + timeTo).getUnixTimestamp(),
                "Comment": comment,
                "FieldID": selectedField,
                "FieldSizeID": selectedFieldSize,
                "EventColor": eventColor
            }).then(res => {
                // TODO: Show posted message
                console.log(res);
            });

            handleCloseButton();
        };
        
        clearFieldInfo();
    };

    let fieldOpts = props.fields.map((field) => <option key={field.Id} value={field.Id}>{field.Name}</option>);
    fieldOpts.unshift(<option key={0} value={0}>Välj plan</option>);

    let fieldSizesOpts = fieldSizes.map((fieldSize) => <option key={fieldSize.Id} value={fieldSize.Id}>{fieldSize.Size}</option>);
    fieldSizesOpts.unshift(<option key={0} value={0}>Välj planstorlek</option>);

    return (
        <div className={"modal-overlay " + (props.isHidden ? "hidden" : "")}>
            <div className="modal-box">
                <h2>Ny bokning</h2>
                <form>
                    <div>
                        <label className="label">Namn*</label>
                        <input className="input" value={name} onChange={handleNameChange} type="text" placeholder="För och efternamn" />
                    </div>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={email} onChange={handleEmailChange} type="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label className="label">Lag namn</label>
                        <input className="input" value={team} onChange={handleTeamChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Klubb namn</label>
                        <input className="input" value={club} onChange={handleClubChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Datum*</label>
                        <input className="input" value={date} onChange={handleDateChange} type="date" />
                    </div>
                    <div className="time-input-container">
                        <label className="label">Tid*</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input" value={timeFrom} onChange={handleTimeFromChange} onBlur={handleTimeLeave} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={timeTo} onChange={handleTimeToChange} onBlur={handleTimeLeave} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field-input">
                        <label className="label">Välj plan*</label>
                        <select className="input" onChange={handleFieldChange}>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select disabled={fieldSizeIsDisabled} className="input" onChange={handleFieldSizeChange}>
                            {fieldSizesOpts}
                        </select>
                    </div>
                    
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={comment} onChange={handleCommentChange} rows="2"></textarea>
                    </div>
                </form>

                <div className="new-event-color-picker">
                    <ColorPicker selectedColor={eventColor} colors={colors} onColorChange={handleEventColorChange} />
                </div>
                <div className={(props.showAdminOptions ? "hidden" : "price-estimation")}>
                    {/* TODO: Show price estimation */}
                    <h4>
                        {currentPrice} SEK
                    </h4>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn close-btn" onClick={handleCloseButton}>Stäng</button>
                    <button type="button" className={submitButtonDisabled ? "disabled-btn submit-disabled" : "btn send-btn"}
                            disabled={submitButtonDisabled} 
                            onClick={handleSendNewBooking}>
                                Skicka bokningsförfrågan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewEventModal;
