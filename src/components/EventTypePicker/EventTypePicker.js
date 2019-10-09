import React, { useState } from "react";
import "./EventTypePicker.css";

const EventTypePicker = (props) => {
    const [eventTypes, setEventTypes] = useState([
        {
            color: "#009b62",
            name: "Alvesta GIF"
        },
        {
            color: "#d5cb72",
            name: "Utomstående klubb"
        },
        {
            color: "#9c83c3",
            name: "Speciellt evenemang"
        }
    ]);



    return (
        <div>

        </div>
    );
};

export default EventTypePicker;