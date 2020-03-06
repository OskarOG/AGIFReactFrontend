import React from "react";
import { useSelector } from "react-redux";

import AlterEventModalPresenter from "../presenters/AlterEventModal";

const AlterEventModalContainer = () => {
    const colors = useSelector(state => state.colors);

    return <AlterEventModalPresenter
                colors={colors} />
};

export default AlterEventModalContainer;
