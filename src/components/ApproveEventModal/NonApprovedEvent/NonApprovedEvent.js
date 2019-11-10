import React, { useState } from "react";

import "./NonApprovedEvent.css";

import ColorPicker from "../../ColorPicker/ColorPicker";

const NonApprovedEvent = (props) => {
    const weekDays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    const fieldName = props.FieldName.split("-")[0];

    const colors = [
        { color: "#009b62", text: "AGIF bokning" }, 
        { color: "#d5cb72", text: "Extern bokning" }, 
        { color: "#9c83c3", text: "Speciell bokning" }, 
        { color: "#d96d6d", text: "Preliminär bokning" }];

    const [isApproveSelected, setApproveSelected] = useState(false);
    const [isDenySelected, setDenySelected] = useState(false);

    const [eventColor, setEventColor] = useState(props.EventColor);
    const [changingRoomId, setChangingRoomId] = useState(-1);
    const [changingRoomTimeFrom, setChangingRoomTimeFrom] = useState("");
    const [changingRoomTimeTo, setChangingRoomTimeTo] = useState("");

    const handleApproveClick = () => {
        setDenySelected(false);
        setApproveSelected(true);

        props.onApproveSelected(props.Id, eventColor, changingRoomId, changingRoomTimeFrom, changingRoomTimeTo);
    };

    const handleDenyClick = () => {
        setApproveSelected(false);
        setDenySelected(true);

        props.onDenySelected(props.Id);
    };

    const handleColorChange = (color) => {
        setEventColor(color);
    };

    const handleChangingRoomIdChange = () => {
        setChangingRoomId(event.target.value);
    };

    const handleChangingRoomTimeFromChange = () => {
        setChangingRoomTimeFrom(event.target.value);
    };

    const handleChangingRoomTimeToChange = () => {
        setChangingRoomTimeTo(event.target.value);
    };

    const changingRoomOpts = props.changingRooms.map((ch) => <option key={ch.Id} value={ch.Id}>{ch.Name} - {ch.Size}</option>)

    return (
        <div className="non-approved-event-box">
            <h3>{ props.Team } - { props.Club }</h3>
            <p>
                Namn: { props.Name }<br />
                Email: { props.Email }
            </p>
            <p>
                Plan: { fieldName } - { props.FieldSize } <br />
                Datum: { weekDays[props.TimeFrom.getDay()] } - { props.TimeFrom.toLocaleDateString() } <br />
                Från: { props.TimeFrom.toTime() } <br />
                Till: { props.TimeTo.toTime() } <br />
            </p>
            <p>Kommentar: { props.Comment }</p>


            <div className="time-input-container">
                <label className="label">Tid för omklädningsrum:</label>
                <div>
                    <div className="time-input-div">
                        <div>
                            <div>Från</div>
                            <input className="time-input approve-input" value={changingRoomTimeFrom} onChange={handleChangingRoomTimeFromChange} type="time" />
                            <span>-</span>
                        </div>
                    </div>
                    <div className="time-input-div">
                        <div>
                            <div>Till</div>
                            <input className="time-input approve-input" value={changingRoomTimeTo} onChange={handleChangingRoomTimeToChange} type="time" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="approve-select">
                Omklädningsrum:
                <select className="input" onChange={handleChangingRoomIdChange} defaultValue="-1">
                    <option disabled value="-1">Välj omklädningsrum</option>
                    {changingRoomOpts}
                </select>
            </div>

            <div className="non-approved-color-picker-container">
                <ColorPicker selectedColor={eventColor} colors={colors} onColorChange={handleColorChange} />
            </div>

            <div className="decision-buttons">
                <button type="button" className={"btn " + (isApproveSelected ? "approve-selected" : "")} onClick={handleApproveClick}>Godkänn</button>
                <button type="button" className={"btn " + (isDenySelected ? "deny-selected" : "")} onClick={handleDenyClick}>Neka</button>
            </div>
        </div>
    );
};

export default NonApprovedEvent;
