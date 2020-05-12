import React, { useRef, useEffect } from "react";

const DayHeaderPresenter = ({
    dayName,
    year,
    month,
    date
}) => {
    const dayHeaderRef = useRef(null);

    let vertScroll = -1000;
    useEffect(() => {
        // document.querySelectorAll(".day-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
        dayHeaderRef.current.style = "top:" + window.scrollY + "px";

        window.addEventListener('scroll', (e) => {
            if (e.currentTarget.scrollY != vertScroll) {
                vertScroll = e.currentTarget.scrollY;
                window.requestAnimationFrame(() => dayHeaderRef.current.style = "top:" + vertScroll + "px");

                // window.requestAnimationFrame(() => 
                //     document.querySelectorAll(".day-header").forEach((e) => e.style = "top:" + vertScroll + "px"));
            }
        });
    });

    return (
        <div className="day-header" ref={dayHeaderRef}>
            <div className="day-header-day-name">{dayName}</div>
            <div className="day-header-day-date">{year}-{month < 10 ? '0' : ''}{month}-{date < 10 ? '0' :''}{date}</div>
        </div>
    );
};

export default DayHeaderPresenter;
