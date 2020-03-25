import React from "react";
import { useSelector, connect } from "react-redux";

import {
    openMenu,
    closeMenu
} from "../../actions/menu";

import {
    setSelectedDate
} from "../../actions/dates";

import {
    openApproveEventModal,
    openNewEventModal,
    openLoginModal
} from "../../actions/modals";

import NavigationPresenter from "./NavigationPresenter";

const NavigationContainer = ({
    dispatch
}) => {
    const isMenuOpen = useSelector(state => state.menu.isMenuOpen);
    const selectedDate = useSelector(state => state.date.selectedDate);
    const nonApprovedEventsCount = useSelector(state => state.nonApprovedEvent.nonApprovedEventsCount);
    const isSignedIn = useSelector(state => state.login.isSignedIn);

    const handleOpenMenuClick = () => {
        dispatch(openMenu());
    };

    const handleCloseMenuClick = () => {
        dispatch(closeMenu());
    };

    const handleSelectedDateChange = date => {
        dispatch(setSelectedDate(date));
    };

    const handleNextWeekClick = () => {
        dispatch(setSelectedDate(selectedDate.addDays(7)));
    };

    const handlePrevWeekClick = () => {
        dispatch(setSelectedDate(selectedDate.addDays(-7)));
    };

    const handleShowApproveModal = () => {
        dispatch(openApproveEventModal());
    };

    const handleNewEventClick = () => {
        dispatch(openNewEventModal());
    };

    const handleLoginClick = () => {
        dispatch(openLoginModal());
    };

    const handleLogoutClick = () => {
        // Dispatch SIGN_OUT
    };

    return <NavigationPresenter
                drawerIsOpen={isMenuOpen}
                onOpenClick={handleOpenMenuClick}
                onCloseClick={handleCloseMenuClick}
                selectedDate={selectedDate}
                onSelectedDateChange={handleSelectedDateChange}
                onNextWeekClick={handleNextWeekClick}
                onPrevWeekClick={handlePrevWeekClick}
                nonApprovedCount={nonApprovedEventsCount}
                onShowApproveModalClick={handleShowApproveModal}
                onNewBookingClick={handleNewEventClick}
                isLoggedIn={isSignedIn}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogoutClick} />
};

export default connect()(NavigationContainer);
