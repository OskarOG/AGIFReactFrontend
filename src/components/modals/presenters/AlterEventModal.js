import React from "react";

import ColorPicker from "../../ColorPicker";

const AlterEventModalPresenter = ({
    COLORS,
    isHidden = true,
    name,
    onNameChange,
    email,
    onEmailChange,
    team,
    onTeamChange,
    club,
    onClubChange,
    date,
    onDateChange,
    timeFrom,
    onTimeFromChange,
    onTimeFromLeave,
    timeTo,
    onTimeToChange,
    onTimeToLeave,
    selectedField = -1,
    onSelectedFieldChange,
    availableFields,
    selectedFieldSize = -1,
    onSelectedFieldSizeChange,
    availableFieldSizes,
    changingRoomTimeFrom,
    onChangingRoomTimeFromChange,
    changingRoomTimeTo,
    onChangingRoomTimeToChange,
    selectedChangingRoom,
    onChangingRoomChange,
    availableChangingRooms,
    comment,
    onCommentChange,
    selectedEventColor,
    onColorChange,
    onClose,
    onDelete,
    onUpdateBookingClick
}) => {
    
    const fieldOpts = availableFields.map(f => <option key={f.Id} value={f.Id}>{f.Name}</option>);
    const fieldSizesOpts = availableFieldSizes.map(fs => <option key={fs.Id} value={fs.Id}>{fs.Size}</option>);
    const changingRoomOpts = availableChangingRooms.map(ch => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>);

    return (
        <div className={"modal-overlay " + (isHidden ? "hidden" : "")}>
            <div className="modal-box">
                <h2>Ändra bokning</h2>
                <form>
                    <div>
                        <label className="label">Namn*</label>
                        <input className="input" value={name} onChange={onNameChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={email} onChange={onEmailChange} type="email" />
                    </div>
                    <div>
                        <label className="label">Lag namn</label>
                        <input className="input" value={team} onChange={onTeamChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Klubb namn</label>
                        <input className="input" value={club} onChange={onClubChange} type="text" />
                    </div>
                    <div>
                        <label className="label">Datum*</label>
                        <input className="input" value={date} onChange={onDateChange} type="date" />
                    </div>
                    <div className="time-input-container">
                        <label className="label">Tid*</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input" value={timeFrom} onChange={onTimeFromChange} onBlur={onTimeFromLeave} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={timeTo} onChange={onTimeToChange} onBlur={onTimeToLeave} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="f-input">
                        <label className="label">Välj plan*</label>
                        <select className="input" value={selectedField} onChange={onSelectedFieldChange}>
                            <option disabled value={-1}>Välj plan</option>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select value={selectedFieldSize} className="input" onChange={onSelectedFieldSizeChange}>
                            <option disabled value={-1}>Välj planstorlek</option>
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
                                        value={changingRoomTimeFrom} onChange={onChangingRoomTimeFromChange} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input approve-input" 
                                        value={changingRoomTimeTo} onChange={onChangingRoomTimeToChange} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Omklädningsrum:
                        <select className="input" value={selectedChangingRoom} onChange={onChangingRoomChange}>
                            {changingRoomOpts}
                        </select>
                    </div>
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={comment} onChange={onCommentChange} rows="2"></textarea>
                    </div>
                </form>

                <div className="new-event-color-picker">
                    <ColorPicker selectedColor={selectedEventColor} colors={COLORS} onColorChange={onColorChange} />
                </div>

                <div className="modal-buttons">
                    <button type="button" className="btn close-btn" onClick={onClose}>Stäng</button>
                    <button type="button" className="btn delete-btn" onClick={onDelete}>Ta bort bokning</button>
                    <button type="button" className="btn send-btn" onClick={onUpdateBookingClick}>Uppdatera bokning</button>
                </div>
            </div>
        </div>
    );
};

export default AlterEventModalPresenter;
