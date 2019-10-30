import React, { useState } from "react";

import "./ApproveEventModal.css";
import NonApprovedEvent from "./NonApprovedEvent/NonApprovedEvent";

const ApproveEventModal = (props) => {
    const [eventMap, setEventMap] = useState(new Map());

    const handleApproveSelected = (id, color) => {
        eventMap.set(id, { approved: true, color });
    };

    const handleDenySelected = id => {
        eventMap.set(id, { approved: false, color: "" });
    };
    
    const events = props.nonApprovedEvents.map((e) => {
        e.TimeFrom = new Date(e.TimeFrom);
        e.TimeTo = new Date(e.TimeTo);

        return <NonApprovedEvent key={e.Id}
                Id={e.Id}
                Team={e.Team}
                Club={e.Club}
                Name={e.Name}
                Email={e.Email}
                FieldName={e.FieldName}
                FieldSize={e.FieldSize}
                TimeFrom={e.TimeFrom}
                TimeTo={e.TimeTo}
                Comment={e.Comment}
                EventColor={e.EventColor}
                onApproveSelected={handleApproveSelected}
                onDenySelected={handleDenySelected} />
    });

    const handleCloseButton = () => {
        props.close();
    };

    const handleSendButton = () => {
        const eventList = [];

        eventMap.forEach((value, key, map) => {
            eventList.push({
                Id: key,
                IsApproved: value.approved,
                Color: value.color
            });
        });

        props.send(eventList);
    };

    return (
        <div className={"approval-modal-overlay " + (props.isHidden ? "hidden" : "")}>
            <div className="approval-modal-box">
                <div className="approval-modal-buttons">
                    <div>
                        <button type="button" className="btn close-btn" onClick={handleCloseButton}>Stäng</button>
                        <button type="button" className="btn send-btn" onClick={handleSendButton}>Skicka</button>
                    </div>
                </div>
                <div className="approval-modal-events"> 
                    { events }
                </div>
            </div>
        </div>
    );

};

export default ApproveEventModal;