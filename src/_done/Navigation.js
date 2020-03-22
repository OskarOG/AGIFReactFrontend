import React, { useState } from "react";

import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faSignOutAlt, faSignInAlt, faBars, faTimes, faStepForward, faStepBackward, faPlus } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({
    toggleDrawer,
    onNewBookingClick,
    onLoginClick,
    onNextClick,
    onPrevClick,
    onShowApproveEventModal,
    drawerIsOpen,
    selectedDate,
    onChange,
    isLoggedIn,
    nonApprovedCount
}) => {

    const handleBarClick = () => {
        toggleDrawer(true);
    }

    const handleCloseClick = () => {
        toggleDrawer(false);
    }

    const handleNewBookingClick = () => {
        onNewBookingClick();
    }

    const handleLoginClick = () => {
        onLoginClick("login");
    }

    const handleLogoutClick = () => {
        onLoginClick("logout");
    }

    const handleNextWeekClick = () => {
        onNextClick();
    }

    const handlePrevWeekClick = () => {
        onPrevClick();
    }

    const handleShowApproveModalClick = () => {
        onShowApproveEventModal();
    };

    return (
        <div className={"navigation " + (drawerIsOpen ? "" : "nav-closed")}>
            <div className="nav-slide-controlls">
                <FontAwesomeIcon onClick={handleBarClick} className={"bar-icon " + (drawerIsOpen ? "hidden" : "")} icon={ faBars } />
                <FontAwesomeIcon onClick={handleCloseClick} className={"close-icon " + (drawerIsOpen ? "" : "hidden")} icon={ faTimes } />
            </div>
            <div className="nav-title title">
                <img src="./imgs/agif-logo-small.png" height="42" widht="42" />
                <h1 className={drawerIsOpen ? "" : "hidden"}>Alvesta GIF Planbokning</h1>
            </div>
            <div className="nav-content">
                <div onClick={handleNewBookingClick} className="nav-item">
                    <FontAwesomeIcon className="nav-item-icon" icon={ faPlus } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Ny bokning</p>
                </div>
                <div onClick={handleNextWeekClick} className="nav-item">
                    <FontAwesomeIcon className="nav-item-icon" icon={ faStepForward } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Nästa vecka</p>
                </div>
                <div onClick={handlePrevWeekClick} className="nav-item">
                    <FontAwesomeIcon className="nav-item-icon" icon={ faStepBackward } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Föregående vecka</p>
                </div>

                <DayPicker
                    className={"day-picker-move-left " + (drawerIsOpen ? "" : "hidden")}
                    showWeekNumbers
                    showOutsideDays
                    firstDayOfWeek={1}
                    selectedDays={selectedDate}
                    onDayClick={onChange} />

                <div onClick={handleLoginClick} className={"nav-item " + (isLoggedIn ? "hidden" : "")}>
                    <FontAwesomeIcon className="nav-item-icon sign-in-icon" icon={ faSignInAlt } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Logga in</p>
                </div>

                <div onClick={handleLogoutClick} className={"nav-item " + (isLoggedIn ? "" : "hidden")}>
                    <FontAwesomeIcon className="nav-item-icon" icon={ faSignOutAlt } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Logga ut</p>
                </div>

                <div onClick={handleShowApproveModalClick} className={"nav-item " + (isLoggedIn ? "" : "hidden")}>
                    <FontAwesomeIcon className="nav-item-icon admin-icon" icon={ faUserCog } />
                    <p className={(drawerIsOpen ? "" : "hidden")}>Godkänn förfrågningar <strong>{ nonApprovedCount }</strong></p>
                </div>
                
                <div className="static-nav-item">
                    <div className="nav-color-div-container">
                        <div className="nav-color-div agif"></div>
                    </div>
                    <p className={(drawerIsOpen ? "" : "hidden")}>AGIF bokning</p>
                </div>
                <div className="static-nav-item">
                    <div className="nav-color-div-container">
                        <div className="nav-color-div external"></div>
                    </div>
                    <p className={(drawerIsOpen ? "" : "hidden")}>Extern bokning</p>
                </div>
                <div className="static-nav-item">
                    <div className="nav-color-div-container">
                        <div className="nav-color-div special-booking"></div>
                    </div>
                    <p className={(drawerIsOpen ? "" : "hidden")}>Specialbokning</p>
                </div>
                <div className="static-nav-item">
                    <div className="nav-color-div-container">
                        <div className="nav-color-div awaiting-approval"></div>
                    </div>
                    <p className={(drawerIsOpen ? "" : "hidden")}>Väntar på godkännande</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;