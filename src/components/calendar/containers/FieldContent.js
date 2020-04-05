import React from "react";
import { useSelector } from "react-redux";

import EventContainer from "./Event";
import FieldContentPresenter from "../presenters/FieldContent";

const FieldContentContainer = ({
    date,
    fieldId
}) => {
    const events = useSelector(state => state.event.events);
    
    const eventsOnDate = events.filter((e) => e.TimeFrom.getDate() == date.getDate() && e.FieldID == fieldId);
    const eventViews = eventsOnDate.map(e => <EventContainer key={e.Id} event={e} />);

    return <FieldContentPresenter events={eventViews} />
};

export default FieldContentContainer;
