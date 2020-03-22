import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import CalendarDay from "./CalendarDay";
import Time from "./Time";
import Timeline from "./Timeline";
import NewEventModal from "./NewEventModal";
import AlterEventModal from "./AlterEventModal";

import API from "../helpers/Api";

const CalendarWeek = (props) => {
    const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    // Get fields from API if changes a lot.
    const [fields, setFields] = useState([
        {
            Id: 1, Name: "Plan 1 - 11 man", MaxSize: 11
        },
        {
            Id: 2, Name: "Plan 2 - 7 man", MaxSize: 7
        }
    ]);
    const [events, setEvents] = useState([]);

    const initDate = new Date();
    const [timelinePos, setTimelinePos] = useState(`${(((initDate.getHours() * 60) + initDate.getMinutes()) * 2.5) + 82}px`);

    const [hideAlterEventModal, setHideAlterEventModal] = useState(true);
    const [alterEventId, setAlterEventId] = useState(-1);
    const [alterEventName, setAlterEventName] = useState("");
    const [alterEventEmail, setAlterEventEmail] = useState("");
    const [alterEventTeam, setAlterEventTeam] = useState("");
    const [alterEventClub, setAlterEventClub] = useState("");
    const [alterEventDate, setAlterEventDate] = useState("");
    const [alterEventTimeFrom, setAlterEventTimeFrom] = useState("");
    const [alterEventTimeTo, setAlterEventTimeTo] = useState("");
    const [alterEventFieldSizesOpts, setAlterEventFieldSizesOpts] = useState([]);
    const [alterEventSelectedField, setAlterEventSelectedField] = useState(0);
    const [alterEventSelectedFieldSize, setAlterEventSelectedFieldSize] = useState(0);
    const [alterEventComment, setAlterEventComment] = useState("");
    const [alterChangingRoomTimeFrom, setAlterChangingRoomTimeFrom] = useState("");
    const [alterChangingRoomTimeTo, setAlterChangingRoomTimeTo] = useState("");
    const [alterSelectedChangingRoom, setAlterSelectedChangingRoom] = useState(-1);
    const [alterEventColor, setAlterEventColor] = useState("");
    const [alterChangingRoomOpts, setAlterChangingRoomOpts] = useState([]);


    useEffect(() => {
        API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
            setEvents(res.data);
        }).catch(err => {
            toast.error("Det gick inte hämta veckans evenemang");
        });
    }, [props.weekDate]);

    const handleOpenAlterEventModal = (event) => {
        if (props.userKey != null) {
            API.changingRooms().get(event.ChangingRoomTimeFrom.getUnixTimestamp(), event.ChangingRoomTimeTo.getUnixTimestamp()).then(res => {
                setAlterChangingRoomOpts(res.data);
            }).catch(err => {
                toast.error("Kunde inte hämta omklädningsrum");
            });

            setAlterEventId(event.Id);
            setAlterEventName(event.Name);
            setAlterEventEmail(event.Email);
            setAlterEventTeam(event.Team);
            setAlterEventClub(event.Club);

            const month = event.TimeFrom.getMonth() + 1;
            const day = event.TimeFrom.getDate();
            setAlterEventDate(event.TimeFrom.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day));

            const hoursFrom = event.TimeFrom.getHours();
            const minFrom = event.TimeFrom.getMinutes();
            setAlterEventTimeFrom((hoursFrom < 10 ? "0" + hoursFrom : hoursFrom) + ":" + (minFrom < 10 ? "0" + minFrom : minFrom));

            const hoursTo = event.TimeTo.getHours();
            const minTo = event.TimeTo.getMinutes();
            setAlterEventTimeTo((hoursTo < 10 ? "0" + hoursTo : hoursTo) + ":" + (minTo < 10 ? "0" + minTo : minTo));

            setAlterEventSelectedField(event.FieldID);
            setAlterEventSelectedFieldSize(event.FieldSizeID);
            setAlterEventComment(event.Comment);
            setAlterEventColor(event.EventColor);

            setAlterSelectedChangingRoom(event.ChangingRoomID);

            const crHoursFrom = event.ChangingRoomTimeFrom.getHours();
            const crMinFrom = event.ChangingRoomTimeFrom.getMinutes();
            setAlterChangingRoomTimeFrom((crHoursFrom < 10 ? "0" + crHoursFrom : crHoursFrom) + ":" + (crMinFrom < 10 ? "0" + crMinFrom : crMinFrom));

            const crHoursTo = event.ChangingRoomTimeTo.getHours();
            const crMinTo = event.ChangingRoomTimeTo.getMinutes();
            setAlterChangingRoomTimeTo((crHoursTo < 10 ? "0" + crHoursTo : crHoursTo) + ":" + (crMinTo < 10 ? "0" + crMinTo : crMinTo));

            setHideAlterEventModal(false);
        };
    };

    const cleanAlterModal = () => {
        setAlterEventName("");
        setAlterEventEmail("");
        setAlterEventTeam("");
        setAlterEventClub("");
        setAlterEventDate("");
        setAlterEventTimeFrom("");
        setAlterEventTimeTo("");
        setAlterEventSelectedField(0);
        setAlterEventSelectedFieldSize(0);
        setAlterEventComment("");
        setAlterEventColor("");
    };

    const handleCloseAlterEventModal = () => {
        setHideAlterEventModal(true);
        cleanAlterModal();
    };

    const handleUpdateBookingClick = () => {
        setHideAlterEventModal(true);

        API.events().updateEvent({
            "Id": alterEventId,
            "Name": alterEventName,
            "Email": alterEventEmail,
            "Team": alterEventTeam,
            "Club": alterEventClub,
            "TimeFrom": new Date(alterEventDate + " " + alterEventTimeFrom).getUnixTimestamp(),
            "TimeTo": new Date(alterEventDate + " " + alterEventTimeTo).getUnixTimestamp(),
            "FieldID": alterEventSelectedField,
            "FieldSizeID": alterEventSelectedFieldSize,
            "ChangingRoomTimeFrom": new Date(alterEventDate + " " + alterChangingRoomTimeFrom).getUnixTimestamp(),
            "ChangingRoomTimeTo": new Date(alterEventDate + " " + alterChangingRoomTimeTo).getUnixTimestamp(),
            "ChangingRoomID": alterSelectedChangingRoom,
            "Comment": alterEventComment,
            "EventColor": alterEventColor,
            "UserKey": props.userKey
        }).then(res => {
            toast.success("Bokningen är uppdaterad");
            cleanAlterModal();

            API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
                setEvents(res.data);
            }).catch(err => {
                toast.error("Det gick inte hämta veckans evenemang");
            });
        }).catch(err => {
            toast.error("Det gick inte uppdatera bokningen");
        });
    };

    const handleDeleteBookingClick = () => {
        setHideAlterEventModal(true);
        cleanAlterModal();
        
        API.events().deleteEvent(alterEventId, props.userKey).then(res => {
            toast.success("Bokning borttagen");

            API.events().getForWeek(props.weekDate.startDate.getUnixTimestamp(), props.weekDate.endDate.getUnixTimestamp()).then(res => {
                setEvents(res.data);
            }).catch(err => {
                toast.error("Det gick inte hämta veckans evenemang");
            });
        }).catch(err => {
            toast.error("Det gick inte ta bort bokningen");
        });
    };

    const handleAlterNameChange = () => {
        setAlterEventName(event.target.value);
    };

    const handleAlterEmailChange = () => {
        setAlterEventEmail(event.target.value);
    };

    const handleAlterTeamChange = () => {
        setAlterEventTeam(event.target.value);
    };

    const handleAlterClubChange = () => {
        setAlterEventClub(event.target.value);
    };

    const handleAlterDateChange = () => {
        setAlterEventDate(event.target.value);

        updateFieldSizes(event.target.value, alterEventTimeFrom, alterEventTimeTo, alterEventSelectedField);
    };

    const handleAlterTimeFromChange = () => {
        setAlterEventTimeFrom(event.target.value);
    };

    const handleAlterTimeToChange = () => {
        setAlterEventTimeTo(event.target.value);
    };

    const handleAlterTimeLeave = () => {
        updateFieldSizes(alterEventDate, alterEventTimeFrom, alterEventTimeTo, alterEventSelectedField);
    };

    const handleAlterFieldChange = () => {
        setAlterEventSelectedField(event.target.value);

        updateFieldSizes(alterEventDate, alterEventTimeFrom, alterEventTimeTo, event.target.value);
    };

    const handleAlterFieldSizeChange = () => {
        setAlterEventSelectedFieldSize(event.target.value);
    };

    const handleAlterCommentChange = () => {
        setAlterEventComment(event.target.value);
    };

    const handleAlterChangingRoomTimeFrom = () => {
        setAlterChangingRoomTimeFrom(event.target.value);
    };

    const handleAlterChangingRoomTimeTo = () => {
        setAlterChangingRoomTimeTo(event.target.value);
    };

    const handleChangingRoomChange = () => {
        setAlterSelectedChangingRoom(event.target.value);
    };

    const handleAlterEventColorChange = (color) => {
        setAlterEventColor(color);
    };

    const updateFieldSizes = (selectedDate, selectedTimeFrom, selectedTimeTo, fieldId) => {
        if (selectedDate != "" && selectedTimeFrom != "" && selectedTimeTo != "" && fieldId != 0) {
            var tempDateFrom = new Date(selectedDate + " " + selectedTimeFrom);
            var tempDateTo = new Date(selectedDate + " " + selectedTimeTo);

            API.fields().getFieldSizes(fieldId, tempDateFrom.getUnixTimestamp(), tempDateTo.getUnixTimestamp()).then(res => {
                setAlterEventFieldSizesOpts(res.data);
            }).catch(err => {
                toast.error("Kunde inte hämta tillgängliga planstorlekar");
            });
        }
    };

    const d = new Date(props.weekDate.startDate);
    const calDays = [];
    for (let i = 0; i < 7; i++) {
        d.setTime(props.weekDate.startDate.getTime() + (i*24*60*60*1000));
        calDays.push(<CalendarDay key={d.getTime()}
                                    fields={fields}
                                    dayEvents={events.filter((e) => new Date(e.TimeFrom).getDate() == d.getDate())}
                                    dayDate={new Date(d)}
                                    dayName={days[d.getDay()]}
                                    openAlterEventModal={handleOpenAlterEventModal} />);
    };

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
    };

    return (
        <div className={"calendar-week " + (props.shiftRight ? "if-drawer-open" : "if-drawer-closed")}>
            <Time />
            
            {calDays}
            
            <Timeline shiftRight={props.shiftRight} top={timelinePos} />

            <NewEventModal changingRooms={props.changingRooms} weekDate={props.weekDate} setEvents={setEvents} userKey={props.userKey} showAdminOptions={props.adminLoggedIn} fields={fields} isHidden={props.newBookingModalIsHidden} close={handleCloseNewBookingClick}/>
            
            <AlterEventModal isHidden={hideAlterEventModal}
                fields={fields}
                onClose={handleCloseAlterEventModal}
                onUpdateBookingClick={handleUpdateBookingClick}
                onDelete={handleDeleteBookingClick}
                name={alterEventName}
                email={alterEventEmail}
                team={alterEventTeam}
                club={alterEventClub}
                date={alterEventDate}
                timeFrom={alterEventTimeFrom}
                timeTo={alterEventTimeTo}
                fieldSizesOpts={alterEventFieldSizesOpts}
                selectedField={alterEventSelectedField}
                selectedFieldSize={alterEventSelectedFieldSize}
                comment={alterEventComment}
                
                changingRoomTimeFrom={alterChangingRoomTimeFrom}
                changingRoomTimeTo={alterChangingRoomTimeTo}
                changingRooms={alterChangingRoomOpts}
                selectedChangingRoom={alterSelectedChangingRoom}

                eventColor={alterEventColor}
                onNameChange={handleAlterNameChange}
                onEmailChange={handleAlterEmailChange}
                onTeamChange={handleAlterTeamChange}
                onClubChange={handleAlterClubChange}
                onDateChange={handleAlterDateChange}
                onTimeFromChange={handleAlterTimeFromChange}
                onTimeToChange={handleAlterTimeToChange}
                onTimeLeave={handleAlterTimeLeave}
                onSelectedFieldChange={handleAlterFieldChange}
                onSelectedFieldSizeChange={handleAlterFieldSizeChange}
                onCommentChange={handleAlterCommentChange}

                onChangingRoomTimeFromChange={handleAlterChangingRoomTimeFrom}
                onChangingRoomTimeToChange={handleAlterChangingRoomTimeTo}
                onChangingRoomChange={handleChangingRoomChange}

                onEventColorChange={handleAlterEventColorChange} />
        </div>
    );
};

export default CalendarWeek;