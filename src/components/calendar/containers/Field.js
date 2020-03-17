import React from "react";

import FieldHeaderPresenter from "../presenters/FieldHeader";
import FieldContentContainer from "./FieldContent";

const Field = ({
    fieldTitle
}) => {
    return (
        <div className="field">
            <FieldHeaderPresenter fieldTitle={fieldTitle} />
            <FieldContentContainer />
        </div>
    );
};

export default Field;
