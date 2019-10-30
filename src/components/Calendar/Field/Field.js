import React from "react";
import "./Field.css";

import FieldHeader from "../FieldHeader/FieldHeader";
import FieldContent from "../FieldContent/FieldContent";

const Field = (props) => {
    return (
        <div className="field">
            <FieldHeader fieldTitle={props.fieldTitle}/>
            <FieldContent events={props.fieldEvents} openAlterEventModal={props.openAlterEventModal} />
        </div>
    );
};

export default Field;
