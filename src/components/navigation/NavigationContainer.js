import React from "react";
import { useSelector } from "react-redux";

import NavigationPresenter from "./NavigationPresenter";

const NavigationContainer = () => {
    const isMenuOpen = useSelector(state => state.isMenuOpen);
    const selectedDate = useSelector(state => state.selectedDate);
    const nonApprovedEventsCount = useSelector(state => state.nonApprovedEventsCount);
    const isSignedIn = useSelector(state => state.isSignedIn);

    const handleToogleClick = () => {
        // Dispatch toggle isMenuOpen.
    };

    const handleSelectedDateChange = date => {
        // Dispatch SET_SELECTED_DATE.
    };

    const handleNextWeekClick = () => {
        // Dispatch SET_SELECTED_DATE const d = selectedDate.addDays(7);
    };

    const handlePrevWeekClick = () => {
        // Dispatch SET_SELECTED_DATE const d = selectedDate.addDays(-7);
    };

    const handleShowApproveModal = () => {
        // Dispatch SET_APPROVE_EVENT_MODAL_IS_HIDDEN false
    };

    const handleNewBookingClick = () => {
        // Dispatch SET_NEW_EVENT_MODAL_IS_HIDDEN false
    };

    const handleLoginClick = () => {
        // Dispatch SET_LOGIN_MODAL_IS_HIDDEN false
    };

    const handleLogoutClick = () => {
        // Dispatch SIGN_OUT
    };

    return <NavigationPresenter
                drawerIsOpen={isMenuOpen}
                onOpenClick={handleToogleClick}
                onCloseClick={handleToogleClick}
                selectedDate={selectedDate}
                onSelectedDateChange={handleSelectedDateChange}
                onNextWeekClick={handleNextWeekClick}
                onPrevWeekClick={handlePrevWeekClick}
                nonApprovedCount={nonApprovedEventsCount}
                onShowApproveModalClick={handleShowApproveModal}
                onNewBookingClick={handleNewBookingClick}
                isLoggedIn={isSignedIn}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogoutClick} />
};

export default NavigationContainer;
