import React, { useEffect, useState } from "react";

import "./App.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { SampleData } from "../helpers/SampleData";

import API from "../helpers/Api";

export const App = (props) => {
    const [events, setEvents] = useState(SampleData.events);
    const [displayLogin, setDisplayLogin] = useState(true);

    const weekDateSpan = new Date().getWeekDateSpan();

    useEffect(() => {
        let d = new Date();
        let dayInt = d.getDay() - 1;
        if (dayInt == -1) dayInt = 6;
        let pxToScrollForDays = 300 * dayInt;
        let scrollToTimeInPx = Math.round((((d.getTime() - d.setHours(0,0,0,0)) / 1000) / 60) - 100) * 2.5;
        window.scrollTo(pxToScrollForDays, scrollToTimeInPx);
    }, []);

    return (
        <div className="App">
            <main>
                <div className="navigation">
                    <SideNav onSelect={(selected) => {
                        console.log(selected);

                        if (selected === "next-week") {
                            setDisplayLogin(false);
                        } else if (selected === "previous-week") {
                            setDisplayLogin(true);
                        }
                    }}>
                        <SideNav.Toggle />
                        <SideNav.Nav>
                            <NavItem eventKey="next-week">
                                <NavIcon>
                                <i class="fa fa-step-forward" aria-hidden="true" />
                                </NavIcon>
                                <NavText>Nästa vecka</NavText>
                            </NavItem>
                            <NavItem eventKey="previous-week">
                                <NavIcon>
                                <i class="fa fa-step-backward" aria-hidden="true"></i>
                                </NavIcon>
                                <NavText>Föregående vecka</NavText>
                            </NavItem>
                            <NavItem style={{ visibility: `${ displayLogin ? "visible" : "hidden"}` } } eventKey="signin">
                                <NavIcon>
                                    <i className="fa fa-sign-in" />
                                </NavIcon>
                                <NavText>Logga in</NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                <CalendarWeek weekEvents={events} weekStartDate={weekDateSpan.startDate} />
            </main>
        </div>);
}
