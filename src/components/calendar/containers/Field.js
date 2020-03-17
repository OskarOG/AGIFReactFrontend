import React from "react";

import FieldHeaderPresenter from "../presenters/FieldHeader";
import FieldContentContainer from "./FieldContent";

const Field = ({
    fieldTitle,
    fieldDate
}) => {
    return (
        <div className="field">
            <FieldHeaderPresenter fieldTitle={fieldTitle} />
            <FieldContentContainer fieldDate={fieldDate} />
        </div>
    );
};

export default Field;
