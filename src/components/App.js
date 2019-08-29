import React, { useEffect, useState } from "react";

import "./App.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "react-datepicker/dist/react-datepicker.css";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import Datepicker from "react-datepicker";

import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { SampleData } from "../helpers/SampleData";

import API from "../helpers/Api";

export const App = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [weekStartDate, setWeekStartDate] = useState(new Date().getWeekDateSpan().startDate);
    const [selectedDate, setSelectedDate] = useState(weekStartDate);

    useEffect(() => {
        let d = new Date();
        let dayInt = d.getDay() - 1;
        if (dayInt == -1) dayInt = 6;
        let pxToScrollForDays = 300 * dayInt;
        let scrollToTimeInPx = Math.round((((d.getTime() - d.setHours(0,0,0,0)) / 1000) / 60) - 100) * 2.5;
        window.scrollTo(pxToScrollForDays, scrollToTimeInPx);
    }, []);

    const handleDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="App">
            <main>
                <div className="navigation">
                    <SideNav onSelect={(selected) => {
                        if (selected === "next-week") {
                            setWeekStartDate(weekStartDate.addDays(7));
                        } else if (selected === "previous-week") {
                            setWeekStartDate(weekStartDate.addDays(-7));
                        } else if (selected === "new-event") {
                            // TODO: Display modal
                        } else if (selected === "signin") {
                            // TODO: Sign in modal
                        } else if (selected === "admin") {
                            // TODO: Open admin page/view
                        } else if (selected === "signout") {

                        }
                    }}>
                        <SideNav.Toggle />
                        <SideNav.Nav>
                            <NavItem eventKey="next-week">
                                <NavIcon>
                                <i className="fa fa-step-forward" aria-hidden="true" />
                                </NavIcon>
                                <NavText>Nästa vecka</NavText>
                            </NavItem>
                            <NavItem eventKey="previous-week">
                                <NavIcon>
                                <i className="fa fa-step-backward" aria-hidden="true"></i>
                                </NavIcon>
                                <NavText>Föregående vecka</NavText>
                            </NavItem>

                            <NavItem eventKey="new-event">
                                <NavIcon>
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                </NavIcon>
                                <NavText>Ny bokning</NavText>
                            </NavItem>

                            <NavItem>
                                <NavText>
                                <Datepicker selected={selectedDate} onChange={date => handleDate(date) } inline />
                                </NavText>
                            </NavItem>

                            <NavItem style={{ visibility: `${ isLoggedIn ? "hidden" : "visible" }` } } eventKey="signin">
                                <NavIcon>
                                    <i className="fa fa-sign-in" />
                                </NavIcon>
                                <NavText>Logga in</NavText>
                            </NavItem>
                            <NavItem style={{ visibility: `${ isLoggedIn ? "visible" : "hidden"}` } } eventKey="admin">
                                <NavIcon>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </NavIcon>
                                <NavText>Administrera</NavText>
                            </NavItem>
                            <NavItem style={{ visibility: `${ isLoggedIn ? "visible" : "hidden"}` } } eventKey="signout">
                                <NavIcon>
                                    <i className="fa fa-sign-out" />
                                </NavIcon>
                                <NavText>Logga ut</NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <CalendarWeek weekStartDate={weekStartDate} />
            </main>
        </div>);
}
