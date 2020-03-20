import React from "react";
import { useSelector } from "react-redux";

import CalendarDayPresenter from "../presenters/CalendarDay";
import FieldContainer from "./Field";

const CalendarDayContainer = ({
    date
}) => {
    const fields = useSelector(state => state.fields);
    const fieldViews = fields.map(f => <FieldContainer
                                            fieldTitle={f.Name}
                                            date={date}
                                            fieldId={f.Id} />);
    
    return <CalendarDayPresenter
                day={date.getDay()}
                year={date.getFullYear()}
                month={date.getMonth()+1}
                date={date.getDate()}
                fields={fieldViews} />;
};

export default CalendarDayContainer;
