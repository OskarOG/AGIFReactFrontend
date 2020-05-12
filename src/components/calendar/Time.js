import React, { useEffect, useRef } from "react";

const Time = () => {
    const calTimeRef = useRef(null);

    let horiScroll = -10000;
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (e.currentTarget.scrollX != horiScroll) {
                horiScroll = e.currentTarget.scrollX;
                // window.requestAnimationFrame(() => document.getElementById("cal-time").style = "left:" + horiScroll + "px");
                calTimeRef.current.style = "left:" + horiScroll + "px";
            };
        });
    }, []);

    const timeList = [];
    for (let i = 0; i < 24; i++) {
        timeList.push(<li key={i+":00"}>{i}:00</li>);
        timeList.push(<li key={i+":30"} className="halfhour">{i}:30</li>);
    };

    return (
        <div id="cal-time" className="time" ref={calTimeRef}>
            <ul>
                {timeList}
            </ul>    
        </div>
    );
};

export default Time;