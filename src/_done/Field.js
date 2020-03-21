import React from "react";

import FieldHeader from "./FieldHeader";
import FieldContent from "./FieldContent";

const Field = (props) => {
    return (
        <div className="field">
            <FieldHeader fieldTitle={props.fieldTitle}/>
            <FieldContent events={props.fieldEvents} openAlterEventModal={props.openAlterEventModal} />
        </div>
    );
};

export default Field;
