import React, { useState, useEffect } from "react";

import TimelinePresenter from "../presenters/Timeline";

const TimelineContainer = ({
    shifRight
}) => {
    const [timelinePos, setTimelinePos] = useState(0);

    useEffect(() => {
        const d = new Date();
        setTimeout(() => {
            setInterval(() => {
                const thisDate = new Date();
                setTimelinePos(`${(((thisDate.getHours() * 60) + thisDate.getMinutes()) * 2.5) + 82}px`);
            }, 60000);
        }, (60 - d.getSeconds()) * 1000);
    }, []);

    return <TimelinePresenter shiftRight={shifRight} top={timelinePos} />
};

export default TimelineContainer;
