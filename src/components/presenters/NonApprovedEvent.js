import React from "react";

const NonApprovedEventPresenter = ({
    eventId,
    team,
    club,
    name,
    email,
    fieldName,
    fieldSize,
    weekDay,
    date,
    timeFrom,
    timeTo,
    comment,
    changingRoomTimeFrom,
    onChangingRoomTimeFromChange = () => {},
    onChangingRoomTimeFromBlur = () => {},
    changingRoomTimeTo,
    onChangingRoomTimeToChange = () => {},
    onChangingRoomTimeToBlur = () => {},
    changingRooms = [],
    changingRoomSelectDisabled = true,
    onChangingRoomIdChange = () => {},
    eventColor,
    colors = [],
    onColorChange = () => {},
    isApproved,
    onIsApproveClick = () => {},
    isDeclined,
    onIsDeclinedClick = () => {}
}) => {
    const changingRoomOpts = changingRooms.map((ch) => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>);

    return (
        <div className="non-approved-event-box">
            <h3>{ team } - { club }</h3>
            <p>
                Namn: { name }<br />
                Email: { email }
            </p>
            <p>
                Plan: { fieldName } - { fieldSize } <br />
                Datum: { weekDay } - { date } <br />
                Från: { timeFrom } <br />
                Till: { timeTo } <br />
            </p>
            <p>Kommentar: { comment }</p>

            <div className="time-input-container">
                <label className="label">Tid för omklädningsrum:</label>
                <div>
                    <div className="time-input-div">
                        <div>
                            <div>Från</div>
                            <input className="time-input approve-input" 
                                value={changingRoomTimeFrom} 
                                onChange={onChangingRoomTimeFromChange} 
                                onBlur={onChangingRoomTimeFromBlur} 
                                type="time" />
                            <span>-</span>
                        </div>
                    </div>
                    <div className="time-input-div">
                        <div>
                            <div>Till</div>
                            <input className="time-input approve-input"
                                value={changingRoomTimeTo} 
                                onChange={onChangingRoomTimeToChange} 
                                onBlur={onChangingRoomTimeToBlur} 
                                type="time" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="non-approved-changingroom-select">
                Omklädningsrum:
                <select disabled={changingRoomSelectDisabled} className="input" onChange={onChangingRoomIdChange} defaultValue="-1">
                    <option disabled value="-1">Välj omklädningsrum</option>
                    {changingRoomOpts}
                </select>
            </div>

            <div className="non-approved-color-picker-container">
                <ColorPicker selectedColor={eventColor} colors={colors} onColorChange={onColorChange} />
            </div>

            <div className="decision-buttons">
                <button type="button" className={"btn " + (isApproved ? "approve-selected" : "")} onClick={onIsApproveClick(eventId)}>Godkänn</button>
                <button type="button" className={"btn " + (isDeclined ? "deny-selected" : "")} onClick={onIsDeclinedClick(eventId)}>Neka</button>
            </div>
        </div>
    );
};

export default NonApprovedEventPresenter;