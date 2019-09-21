import React, { useState } from 'react';

import './NewEventModal.css';

export const NewEventModal = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [club, setClub] = useState("");
    const [date, setDate] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [comment, setComment] = useState("");

    const [fields, setFields] = useState([]);
    const [fieldSizes, setFieldSizes] = useState([]);

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
    }

    

    return (
        <div className="modal-overlay">
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
                        <select className="input"></select>
                    </div>
                    <div>
                        <label className="label">Välj storlek*</label>
                        <select className="input"></select>
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
                <div>
                    <h4 id="price-estimation"></h4>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="btn close-btn">Stäng</button>
                    <button type="button" className="btn send-btn" onClick={handleSendNewBooking}>Skicka bokningsförfrågan</button>
                </div>
            </div>
        </div>
    );
}