import React, { useState } from 'react';

import './NewEventModal.css';

export const NewEventModal = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [selectedField, setSelectedField] = useState();
    const [selectedFieldSize, setSelectedFieldSize] = useState();
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [comment, setComment] = useState("");
    const [currentPrice, setCurrentPrice] = useState(0);

    const [fields, setFields] = useState([]); // TODO: Get fields from server
    const [fieldSizes, setFieldSizes] = useState([]); // TODO: Get fieldsizes from server

    const handleNameChange = () => {
        setName(event.target.value);
    }

    const handleEmailChange = () => {
        setEmail(event.target.value);
    }

    const handleTeamChange = () => {
        setTeam(event.target.value);
    }

    const handleClubChange = () => {
        setClub(event.target.value);
    }

    const handleFieldChange = () => {
        setSelectedField(event.target.value);
    }

    const handleFieldSizeChange = () => {
        setSelectedFieldSize(event.target.value);
    }

    const handleDateChange = () => {
        setDate(event.target.value);
    }

    const handleTimeFromChange = () => {
        setTimeFrom(event.target.value);
    }

    const handleTimeToChange = () => {
        setTimeTo(event.target.value);
    }

    const handleCommentChange = () => {
        setComment(event.target.value);
    }

    const handleSendNewBooking = () => {
        console.log(name);
        console.log(date);

        // TODO: Send event to server.
    }

    const handleCloseButton = () => {
        props.close();
    }

    let fieldOpts = fields.map((field) => <option key={field.id} value={field.id}>{field.name}</option>);
    let fieldSizesOpts = fieldSizes.map((fieldSize) => <option key={fieldSize.id} value={fieldSize.id}>{fieldSize.size}</option>);

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
                        <label className="label">Välj plan*</label>
                        <select className="input" onChange={handleFieldChange}>
                            {fieldOpts}
                        </select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select className="input" onChange={handleFieldSizeChange}>
                            {fieldSizesOpts}
                        </select>
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
                                    <input className="time-input" value={timeFrom} onChange={handleTimeFromChange} type="time" />
                                    <span>-</span>
                                </div>
                            </div>
                            <div className="time-input-div">
                                <div>
                                    <div>Till</div>
                                    <input className="time-input" value={timeTo} onChange={handleTimeToChange} type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-comment-div">
                        <label className="label">Annan kommentar:</label>
                        <textarea className="input" value={comment} onChange={handleCommentChange} rows="2"></textarea>
                    </div>
                </form>
                <div className="price-estimation">
                    {/* TODO: Show price estimation */}
                    <h4>
                        {currentPrice} SEK
                    </h4> 
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn close-btn" onClick={handleCloseButton}>Stäng</button>
                    <button type="button" className="btn send-btn" onClick={handleSendNewBooking}>Skicka bokningsförfrågan</button>
                </div>
            </div>
        </div>
    );
}