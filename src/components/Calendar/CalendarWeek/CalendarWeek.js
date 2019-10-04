import React, { useState, useEffect } from "react";
import "./CalendarWeek.css";
import { CalendarDay } from "../CalendarDay/CalendarDay";
import { Time } from "../Time/Time";
import { Timeline } from "../Timeline/Timeline";
import { NewEventModal } from "../NewEventModal/NewEventModal";

import API from "../../../helpers/Api";

export const CalendarWeek = (props) => {
    const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    // Get fields from API if changes a lot.
    const [fields, setFields] = useState([
        {
            Id: 1, Name: "Plan 1", MaxSize: 11
        },
        {
            Id: 2, Name: "Plan 2", MaxSize: 7
        }
    ]);
    const [events, setEvents] = useState([]);

    const initDate = new Date();
    const [timelinePos, setTimelinePos] = useState(`${(((initDate.getHours() * 60) + initDate.getMinutes()) * 2.5) + 82}px`);

    useEffect(() => {
        API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
            setEvents(res.data);
        });
    }, []);

    const d = new Date(props.weekDate.startDate);
    const calDays = [];
    for (let i = 0; i < 7; i++) {
        d.setTime(props.weekDate.startDate.getTime() + (i*24*60*60*1000));
        calDays.push(<CalendarDay key={d.getTime()}
                                    fields={fields}
                                    dayEvents={events.filter((e) => new Date(e.TimeFrom).getDate() == d.getDate())}
                                    dayDate={new Date(d)}
                                    dayName={days[d.getDay()]} />);
    };

    // TODO: Possible refactor into their own components instead of here.
    const scrollVert = (pxls) => {
        document.querySelectorAll(".day-header").forEach((e) => e.style = "top:" + pxls + "px");
        document.querySelectorAll(".field-header").forEach((e) => e.style = "top:" + pxls + "px");
    };

    let horiScroll = -100;
    let vertScroll = -100;
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (e.currentTarget.scrollX != horiScroll) {
                horiScroll = e.currentTarget.scrollX;
                window.requestAnimationFrame(() => document.getElementById("cal-time").style = "left:" + horiScroll + "px");
            }
            if (e.currentTarget.scrollY != vertScroll) {
                vertScroll = e.currentTarget.scrollY;
                window.requestAnimationFrame(() => scrollVert(vertScroll));
            }
        });

        let dt = new Date();
        setTimeout(() => {
            setInterval(() => {
                let thisDate = new Date();
                setTimelinePos(`${(((thisDate.getHours() * 60) + thisDate.getMinutes()) * 2.5) + 82}px`);
            }, 60000);
        }, (60 - dt.getSeconds()) * 1000);
    }, []);

    const handleCloseNewBookingClick = () => {
        props.onCloseBookingModal();
    }

    return (
        <div className={"calendar-week " + (props.shiftRight ? "if-drawer-open" : "if-drawer-closed")}>
            <Time />
            {calDays}
            <Timeline shiftRight={props.shiftRight} top={timelinePos} />

            <NewEventModal fields={fields} isHidden={props.newBookingModalIsHidden} close={handleCloseNewBookingClick}/>
        </div>
    );
}