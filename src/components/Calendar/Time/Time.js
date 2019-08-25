import React from "react";
import "./Time.css";

export const Time = (props) => {
    const timeList = [];
    for (let i = 0; i < 24; i++) {
        timeList.push(<li key={i+":00"}>{i}:00</li>);
        timeList.push(<li key={i+":30"} className="halfhour">{i}:30</li>);
    }

    return (
        <div id="cal-time" className="time">
            <ul>
                {timeList}
            </ul>    
        </div>
    );
};