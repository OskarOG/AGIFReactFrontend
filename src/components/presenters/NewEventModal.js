import React from "react";

const NewEventModalPresenter = ({
    isHidden = true,

    showAdminOptions = false,
    recurringEventDateTo,
    onRecurringEventDateToChange,
    changingRoomTimeFrom,
    onChangingRoomTimeFromChange,
    changingRoomTimeTo,
    onChangingRoomTimeToChange,
    onChangingRoomTimeLeave,
    changingRoomSelectIsDisabled,
    selectedChangingRoomId,
    onChangingRoomIdChange,
    availableChangingRooms,

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
    timeTo,
    onTimeToChange,
    onTimeLeave,
    selectedFieldId,
    onFieldIdChange,
    availableFields,
    fieldSizeIsDisabled,
    selectedFieldSizeId,
    onFieldSizeChange,
    availableFieldSizes,
    comment,
    onCommentChange,
    colors,
    eventColor,
    onEventColorChange,
    currentPrice,
    onCloseClick,
    submitButtonDisabled,
    onSendNewBooking
}) => {

    const fieldOpts = availableFields.map(f => <option></option>);
    const fieldSizesOpts = availableFieldSizes.map(fs => <option></option>);
    const availableChangingRoomsOpts = availableChangingRooms.map(cr => <option></option>);

    return (
        <div className={"modal-overlay" + (isHidden ? " hidden" : "")}>
            <div className="modal-box">
                <h2>Ny bokning</h2>
                <form>
                    <div>
                        <label className="label">Namn*</label>
                        <input className="input" value={name} onChange={onNameChange} type="text" placeholder="För och efternamn" />
                    </div>
                    <div>
                        <label className="label">Email address*</label>
                        <input className="input" value={email} onChange={onEmailChange} type="email" placeholder="name@example.com" />
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
                    <div className={(showAdminOptions ? "" : "hidden")}>
                        <label className="label">Återkommande bokning slut datum</label>
                        <div>
                            <input className="input" value={recurringEventDateTo} onChange={onRecurringEventDateToChange} type="date" />
                        </div>
                    </div>
                    <div className="time-input-container">
                        <label className="label">Tid*</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input" value={timeFrom} onChange={onTimeFromChange} onBlur={onTimeLeave} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={timeTo} onChange={onTimeToChange} onBlur={onTimeLeave} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field-margin">
                        <label className="label">Välj plan*</label>
                        <select className="input" value={selectedFieldId} onChange={onFieldIdChange}>
                            <option value={-1}>Välj plan</option>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select disabled={fieldSizeIsDisabled} className="input" value={selectedFieldSizeId} onChange={onFieldSizeChange}>
                            <option value={-1}>Välj planstorlek</option>
                            {fieldSizesOpts}
                        </select>
                    </div>
                    <div className={"time-input-container " + (showAdminOptions ? "" : "hidden")}>
                        <label className="label">Tid för omklädningsrum:</label>
                        <div>
                            <div className="time-input-div">
                                <div>
                                    <div>Från</div>
                                    <input className="time-input approve-input" type="time"
                                        value={changingRoomTimeFrom}
                                        onChange={onChangingRoomTimeFromChange}
                                        onBlur={onChangingRoomTimeLeave} />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input approve-input" type="time"
                                        value={changingRoomTimeTo} 
                                        onChange={onChangingRoomTimeToChange} 
                                        onBlur={onChangingRoomTimeLeave} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={(showAdminOptions ? "" : "hidden")}>
                        Omklädningsrum:
                        <select disabled={changingRoomSelectIsDisabled} className="input" value={selectedChangingRoomId} onChange={onChangingRoomIdChange}>
                            <option value={-1}>Välj omklädningsrum</option>
                            {availableChangingRoomsOpts}
                        </select>
                    </div>
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={comment} onChange={onCommentChange} rows="2"></textarea>
                    </div>
                </form>

                <div className="new-event-color-picker">
                    <ColorPicker selectedColor={eventColor} colors={colors} onColorChange={onEventColorChange} />
                </div>
                <div className={(showAdminOptions ? "hidden" : "price-estimation")}>
                    {/* TODO: Show price estimation */}
                    <h4>
                        {currentPrice} SEK
                    </h4>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn close-btn" onClick={onCloseClick}>Stäng</button>
                    <button type="button" className={submitButtonDisabled ? "disabled-btn submit-disabled" : "btn send-btn"}
                            disabled={submitButtonDisabled} 
                            onClick={onSendNewBooking}>
                                Skicka bokningsförfrågan
                    </button>
                </div>
            </div>
        </div>
    );    
};

export default NewEventModalPresenter;
