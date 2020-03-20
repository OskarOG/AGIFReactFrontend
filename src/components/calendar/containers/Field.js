import React from "react";

import FieldHeaderPresenter from "../presenters/FieldHeader";
import FieldContentContainer from "./FieldContent";

const Field = ({
    fieldTitle,
    date,
    fieldId
}) => {
    return (
        <div className="field">
            <FieldHeaderPresenter fieldTitle={fieldTitle} />
            <FieldContentContainer date={date} fieldId={fieldId} />
        </div>
    );
};

export default Field;
