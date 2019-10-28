import React, { useState } from "react";

import "./NonApprovedEvent.css";

const NonApprovedEvent = (props) => {
    const weekDays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    const fieldName = props.FieldName.split("-")[0];

    const [isApproveSelected, setApproveSelected] = useState(false);
    const [isDenySelected, setDenySelected] = useState(false);

    const handleApproveClick = () => {
        setDenySelected(false);
        setApproveSelected(true);

        props.onApproveSelected(props.Id);
    };

    const handleDenyClick = () => {
        setApproveSelected(false);
        setDenySelected(true);

        props.onDenySelected(props.Id);
    };

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
            <div className="decision-buttons">
                <button type="button" className={"btn " + (isApproveSelected ? "approve-selected" : "")} onClick={handleApproveClick}>Godkänn</button>
                <button type="button" className={"btn " + (isDenySelected ? "deny-selected" : "")} onClick={handleDenyClick}>Neka</button>
            </div>
        </div>
    );
};

export default NonApprovedEvent;
