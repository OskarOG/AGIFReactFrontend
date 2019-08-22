import React, { useEffect, useState } from "react";
import "./App.css";
import { CalendarWeek } from "./CalendarWeek/CalendarWeek";
import API from "../helpers/Api";

export const App = (props) => {
    const [events, setEvents] = useState([]);

    const tDate = new Date();
    tDate.setHours(0,0,0,0);

    const startDate = tDate.subtractDays(tDate.getDay()-1);
    const endDate = tDate.addDays(7 - tDate.getDay());
    endDate.setHours(23,59,59,999);

    API.events()
        .getForWeek(startDate, endDate)
        .then((r) => {
            setEvents(r.data);
        });
    
    return (
        <div className="App">
            <CalendarWeek weekEvents={events} weekStartDate={startDate} />
        </div>);
}
