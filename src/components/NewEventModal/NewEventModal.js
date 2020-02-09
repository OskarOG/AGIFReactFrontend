import React, { useState } from 'react';
import { toast } from "react-toastify";

import './NewEventModal.css';

import API from "../../helpers/Api";
import ColorPicker from "../ColorPicker/ColorPicker.js";

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
    const [selectedField, setSelectedField] = useState(-1);
    const [selectedFieldSize, setSelectedFieldSize] = useState(-1);
    const [date, setDate] = useState("");
    const [recuringEventDateTo, setRecuringEventDateTo] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");
    const [selectedChangingRoom, setSelectedChangingRoom] = useState(-1);
    const [changingRoomSelectIsDisabled, setChangingRoomSelectIsDisabled] = useState(true);
    const [availableChangingRooms, setAvailableChangingRooms] = useState([]);

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
            let tempDateFrom = new Date(selectedDate + " " + selectedTimeFrom);
            let tempDateTo = new Date(selectedDate + " " + selectedTimeTo);

            API.fields().getFieldSizes(fieldId, tempDateFrom.getUnixTimestamp(), tempDateTo.getUnixTimestamp()).then(res => {
                setFieldSizes(res.data);

                setFieldSizeIsDisabled(false);
                setSubmitButtonDisabled(false);
            }).catch(err => {
                toast.error("Kunde inte hämta tillgängliga planstorlekar");
            });
        }
    };

    const updateAvailableChangingRooms = () => {
        setChangingRoomSelectIsDisabled(true);
        setSubmitButtonDisabled(true);

        if (date != "" && changingRoomTimeFrom != "" && changingRoomTimeTo != "") {
            let tempChangingRoomDateFrom = new Date(date + " " + changingRoomTimeFrom);
            let tempChangingRoomDateTo = new Date(date + " " + changingRoomTimeTo);

            API.changingRooms().get(tempChangingRoomDateFrom.getUnixTimestamp(), tempChangingRoomDateTo.getUnixTimestamp()).then(res => {
                setAvailableChangingRooms(res.data.map((ch) => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>));

                setChangingRoomSelectIsDisabled(false);
                setSubmitButtonDisabled(false);
            }).catch(err => {
                toast.error("Kunde inte hämta omklädningsrum");
            });
        };
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
        console.log(event.target.value);
        setSelectedFieldSize(event.target.value);
    };

    const handleDateChange = () => {
        setDate(event.target.value);

        updateFieldSizes(event.target.value, timeFrom, timeTo, selectedField);
    };

    const handleRecuringEventDateToChange = () => {
        setRecuringEventDateTo(event.target.value);
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

    const handleChangingRoomTimeFromChange = () => {
        setChangingRoomTimeFrom(event.target.value);

        updateAvailableChangingRooms();
    };

    const handleChangingRoomTimeToChange = () => {
        setChangingRoomTimeTo(event.target.value);

        updateAvailableChangingRooms();
    };

    const handleChangingRoomTimeLeave = () => {
        updateAvailableChangingRooms();
    };

    const handleCommentChange = () => {
        setComment(event.target.value);
    };

    const handleChangingRoomChange = () => {
        setSelectedChangingRoom(event.target.value);
    };

    const clearFieldInfo = () => {
        setSelectedField(-1);
        setSelectedFieldSize(-1);
        setCurrentPrice(0);
        setFieldSizes([]);
        setFieldSizeIsDisabled(true);
        setSubmitButtonDisabled(true);
        setSelectedChangingRoom(-1);
        setChangingRoomSelectIsDisabled(true);
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
        setChangingRoomTimeFrom("");
        setChangingRoomTimeTo("");
        setSelectedChangingRoom(-1);
        setChangingRoomSelectIsDisabled(true);
        setAvailableChangingRooms([]);
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
                "RecurringEventEnd": new Date(recuringEventDateTo + " " + timeTo).getUnixTimestamp(),
                "Comment": comment,
                "FieldID": selectedField,
                "FieldSizeID": selectedFieldSize,
                "EventColor": eventColor,
                "ChangingRoomID": selectedChangingRoom,
                "ChangingRoomTimeFrom": new Date(date + " " + changingRoomTimeFrom).getUnixTimestamp(),
                "ChangingRoomTimeTo": new Date(date + " " + changingRoomTimeTo).getUnixTimestamp(),
                "UserKey": props.userKey
            }).then(res => {
                toast.success("Bokning tillagd");

                API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
                    props.setEvents(res.data);
                }).catch(err => {
                    toast.error("Det gick inte hämta veckans evenemang");
                });
            }).catch(err => {
                toast.error("Det gick inte lägga till bokning, försök igen")
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
                toast.success("Bokning skickad, inväntar godkännande");

                API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
                    props.setEvents(res.data);
                }).catch(err => {
                    toast.error("Det gick inte hämta veckans evenemang");
                });
            }).catch(err => {
                toast.error("Det gick inte lägga till bokning, försök igen")
            });

            handleCloseButton();
        };
        
        clearFieldInfo();
    };

    let fieldOpts = props.fields.map((field) => <option key={field.Id} value={field.Id}>{field.Name}</option>);
    let fieldSizesOpts = fieldSizes.map((fieldSize) => <option key={fieldSize.Id} value={fieldSize.Id}>{fieldSize.Size}</option>);

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
                    <div className={(props.showAdminOptions ? "" : "hidden")}>
                        <label className="label">Återkommande bokning slut datum</label>
                        <div>
                            <input className="input" value={recuringEventDateTo} onChange={handleRecuringEventDateToChange} type="date" />
                        </div>
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
                    <div className="field-margin">
                        <label className="label">Välj plan*</label>
                        <select className="input" onChange={handleFieldChange} value={selectedField}>
                            <option value={-1}>Välj plan</option>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select disabled={fieldSizeIsDisabled} className="input" onChange={handleFieldSizeChange} value={selectedFieldSize}>
                            <option value={-1}>Välj planstorlek</option>
                            {fieldSizesOpts}
                        </select>
                    </div>
                    <div className={"time-input-container " + (props.showAdminOptions ? "" : "hidden")}>
                        <label className="label">Tid för omklädningsrum:</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input approve-input" type="time"
                                        value={changingRoomTimeFrom}
                                        onChange={handleChangingRoomTimeFromChange}
                                        onBlur={handleChangingRoomTimeLeave} />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input approve-input" type="time"
                                        value={changingRoomTimeTo} 
                                        onChange={handleChangingRoomTimeToChange} 
                                        onBlur={handleChangingRoomTimeLeave} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={(props.showAdminOptions ? "" : "hidden")}>
                        Omklädningsrum:
                        <select disabled={changingRoomSelectIsDisabled} className="input" onChange={handleChangingRoomChange} value={selectedChangingRoom}>
                            <option value={-1}>Välj omklädningsrum</option>
                            {availableChangingRooms}
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
