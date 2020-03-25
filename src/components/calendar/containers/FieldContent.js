import React from "react";
import { useSelector } from "react-redux";

import Event from "./Event";
import FieldContentPresenter from "../presenters/FieldContent";

const FieldContentContainer = ({
    date,
    fieldId
}) => {
    const events = useSelector(state => state.event.events);
    
    const eventsOnDate = events.filter((e) =>
        new Date(e.TimeFrom).getDate() == date.getDate()
        && e.FieldId == fieldId);

    const eventViews = eventsOnDate.map(e => <Event key={e.Id} event={e} />);

    return <FieldContentPresenter events={eventViews} />
};

export default FieldContentContainer;
