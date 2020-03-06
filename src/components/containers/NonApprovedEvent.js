import React from "react";
import { useSelector } from "react-redux";

import NonApprovedEventPresenter from "../presenters/NonApprovedEvent";

const NonApprovedEventContainer = ({
    event
}) => {
    const colors = useSelector(state => state.colors);


    return <NonApprovedEventPresenter
                eventId={event.Id}
                colors={colors} />
};

export default NonApprovedEventContainer;
