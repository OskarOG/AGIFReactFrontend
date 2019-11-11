import React from 'react';

import './AlterEventModal.css';

import ColorPicker from "../../ColorPicker/ColorPicker";

const AlterEventModal = (props) => {
    const colors = [
        { color: "#009b62", text: "AGIF bokning" }, 
        { color: "#d5cb72", text: "Extern bokning" }, 
        { color: "#9c83c3", text: "Speciell bokning" }, 
        { color: "#d96d6d", text: "Preliminär bokning" }];

    let fieldOpts = props.fields.map((field) => <option key={field.Id} value={field.Id}>{field.Name}</option>);
    fieldOpts.unshift(<option key={0} value={0}>Välj plan</option>);

    let fieldSizesOpts = props.fieldSizesOpts.map((fieldSize) => <option key={fieldSize.Id} value={fieldSize.Id}>{fieldSize.Size}</option>);
    fieldSizesOpts.unshift(<option key={0} value={0}>Välj planstorlek</option>);

    const changingRoomOpts = props.changingRooms.map((ch) => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>)

    const handleColorChange = (color) => {
        props.onEventColorChange(color);
    };

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
                                    <input className="time-input" value={props.timeFrom} onChange={props.onTimeFromChange} onBlur={props.onTimeLeave} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={props.timeTo} onChange={props.onTimeToChange} onBlur={props.onTimeLeave} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field-input">
                        <label className="label">Välj plan*</label>
                        <select className="input" value={props.selectedField} onChange={props.onSelectedFieldChange}>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select value={props.selectedFieldSize} className="input" onChange={props.onSelectedFieldSizeChange}>
                            {fieldSizesOpts}
                        </select>
                    </div>
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={props.comment} onChange={props.onCommentChange} rows="2"></textarea>
                    </div>

                    {/* <div className="time-input-container">
                        <label className="label">Tid för omklädningsrum:</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input approve-input" value={props.changingRoomTimeFrom} onChange={props.onChangingRoomTimeFromChange} type="time" />
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
                    </div> */}

                    <div>
                        Omklädningsrum:
                        <select className="input" onChange={props.onChangingRoomChange} defaultValue="-1">
                            <option disabled value="-1">Välj omklädningsrum</option>
                            {changingRoomOpts}
                        </select>
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
