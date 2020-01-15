import React, { useState, useEffect } from 'react';

import './AlterEventModal.css';

import ColorPicker from "../../ColorPicker/ColorPicker";
import Api from '../../../helpers/Api';

const AlterEventModal = (props) => {
    const colors = [
        { color: "#009b62", text: "AGIF bokning" }, 
        { color: "#d5cb72", text: "Extern bokning" }, 
        { color: "#9c83c3", text: "Speciell bokning" }, 
        { color: "#d96d6d", text: "Preliminär bokning" }];

    // const [hoursFrom, setHoursFrom] = useState();
    // const [minutesFrom, setMinutesFrom] = useState();
    // const [hoursTo, setHoursTo] = useState();
    // const [minutesTo, setMinutesTo] = useState();

    // const [crHoursFrom, setCrHoursFrom] = useState();
    // const [crMinutesFrom, setCrMinutesFrom] = useState();
    // const [crHoursTo, setCrHoursTo] = useState();
    // const [crMinutesTo, setCrMinutesTo] = useState();
    console.log(props.timeFrom);
    
    const hoursFrom = props.timeFrom != "" ? props.timeFrom.getHours() : "";
    const minutesFrom = props.timeFrom != "" ? props.timeFrom.getMinutes() : "";
    const hoursTo = props.timeTo != "" ? props.timeTo.getHours() : "";
    const minutesTo = props.timeTo != "" ? props.timeTo.getMinutes() : "";

    const crHoursFrom = props.changingRoomTimeFrom != "" ? props.changingRoomTimeFrom.getHours() : "";
    const crMinutesFrom = props.changingRoomTimeFrom != "" ? props.changingRoomTimeFrom.getMinutes() : "";
    const crHoursTo = props.changingRoomTimeFrom != "" ? props.changingRoomTimeTo.getHours() : "";
    const crMinutesTo = props.changingRoomTimeFrom != "" ? props.changingRoomTimeTo.getMinutes() : "";


    let fieldOpts = props.fields.map((field) => <option key={field.Id} value={field.Id}>{field.Name}</option>);
    let fieldSizesOpts = props.fieldSizesOpts.map((fieldSize) => <option key={fieldSize.Id} value={fieldSize.Id}>{fieldSize.Size}</option>);
    
    const changingRoomOpts = props.changingRooms.map((ch) => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>);

    const handleColorChange = (color) => {
        props.onEventColorChange(color);
    };

    useEffect(() => {
        console.log(props.changingRoomTimeFrom);
        console.log(props.changingRoomTimeTo);
        // Api.changingRooms().get(props.changingRoomTimeFrom, props.changingRoomTimeTo).then(res => {
        //     console.log(res);
        // });
    }, [props.changingRoomTimeFrom, props.changingRoomTimeTo]);

    return (
        <div className={"modal-overlay " + (props.isHidden ? "hidden" : "")}>
            <div className="modal-box">
                <h2>Ändra bokning</h2>
                <form>
                    <div>
                        <label className="label">Namn*</label>
                        <input className="input" value={props.name} onChange={props.onNameChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={props.email} onChange={props.onEmailChange} type="email" />
                    </div>
                    <div>
                        <label className="label">Lag namn</label>
                        <input className="input" value={props.team} onChange={props.onTeamChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Klubb namn</label>
                        <input className="input" value={props.club} onChange={props.onClubChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Datum*</label>
                        <input className="input" value={props.date} onChange={props.onDateChange} type="date" />
                    </div>
                    <div className="time-input-container">
                        <label className="label">Tid*</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input" value={(hoursFrom < 10 ? "0" + hoursFrom : hoursFrom) + ":" + (minutesFrom < 10 ? "0" + minutesFrom : minutesFrom)} onChange={props.onTimeFromChange} onBlur={props.onTimeLeave} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={(hoursTo < 10 ? "0" + hoursTo : hoursTo) + ":" + (minutesTo < 10 ? "0" + minutesTo : minutesTo)} onChange={props.onTimeToChange} onBlur={props.onTimeLeave} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field-input">
                        <label className="label">Välj plan*</label>
                        <select className="input" value={props.selectedField} onChange={props.onSelectedFieldChange}>
                            <option disabled value="-1">Välj plan</option>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select value={props.selectedFieldSize} className="input" onChange={props.onSelectedFieldSizeChange}>
                            <option disabled value="-1">Välj planstorlek</option>
                            {fieldSizesOpts}
                        </select>
                    </div>
                    <div className="time-input-container">
                        <label className="label">Tid för omklädningsrum:</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input approve-input" 
                                        value={(changingRoomHourFrom < 10 ? "0" + changingRoomHourFrom : changingRoomHourFrom) + ":" +
                                                (changingRoomMinFrom < 10 ? "0" + changingRoomMinFrom : changingRoomMinFrom)}
                                                onChange={props.onChangingRoomTimeFromChange} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input approve-input" value={props.changingRoomTimeTo} onChange={props.onChangingRoomTimeToChange} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Omklädningsrum:
                        <select className="input" onChange={props.onChangingRoomChange} value={props.selectedChangingRoom}>
                            {changingRoomOpts}
                        </select>
                    </div>
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={props.comment} onChange={props.onCommentChange} rows="2"></textarea>
                    </div>
                </form>

                <div className="new-event-color-picker">
                    <ColorPicker selectedColor={props.eventColor} colors={colors} onColorChange={handleColorChange} />
                </div>

                <div className="modal-buttons">
                    <button type="button" className="btn close-btn" onClick={props.onClose}>Stäng</button>
                    <button type="button" className="btn delete-btn" onClick={props.onDelete}>Ta bort bokning</button>
                    <button type="button" className="btn send-btn" onClick={props.onUpdateBookingClick}>Uppdatera bokning</button>
                </div>
            </div>
        </div>
    );
};

export default AlterEventModal;
