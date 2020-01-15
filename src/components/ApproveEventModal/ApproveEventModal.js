import React, { useState } from "react";

import "./ApproveEventModal.css";
import NonApprovedEvent from "./NonApprovedEvent/NonApprovedEvent";
import moment from "moment";
import Api from "../../helpers/Api";

const ApproveEventModal = (props) => {
    const [eventMap, setEventMap] = useState(new Map());

    const handleApproveSelected = (id, color, changingRoomId, changingRoomTimeFrom, changingRoomTimeTo) => {
        eventMap.set(id, 
            { 
                approved: true, 
                color,
                changingRoomId,
                changingRoomTimeFrom,
                changingRoomTimeTo
            });
    };

    const handleDenySelected = id => {
        eventMap.set(id, { approved: false, color: "" });
    };
    
    const events = props.nonApprovedEvents.map((e) => {
        e.TimeFrom = moment.utc(e.TimeFrom).local().toDate();
        e.TimeTo = moment.utc(e.TimeTo).local().toDate();

        Api.changingRooms().getAll(e.TimeFrom.getUnixTimestamp(), e.TimeTo.getUnixTimestamp()).then(res => {
            console.log(res);
        });

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
                onDenySelected={handleDenySelected}
                changingRooms={props.changingRooms} />
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
                Color: value.color,
                ChangingRoomId: value.changingRoomId,
                ChangingRoomTimeFrom: value.changingRoomTimeFrom,
                ChangingRoomTimeTo: value.changingRoomTimeTo
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