import React, { useRef } from "react";

const DayHeaderPresenter = ({
    dayName,
    year,
    month,
    date
}) => {
    const dayHeaderRef = useRef(null);

    useEffect(() => {
        // document.querySelectorAll(".day-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
        dayHeaderRef.current.style = "top:" + window.scrollY + "px";
    });

    return (
        <div className="day-header" ref={dayHeaderRef}>
            <div className="day-header-day-name">{dayName}</div>
            <div className="day-header-day-date">{year}-{month < 10 ? '0' : ''}{month}-{date < 10 ? '0' :''}{date}</div>
        </div>
    );
};

export default DayHeaderPresenter;
