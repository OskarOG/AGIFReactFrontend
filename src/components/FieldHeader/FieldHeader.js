import React from "react";
import "./FieldHeader.css";

export const FieldHeader = (props) => {
    return (
        <div className="field-header">
            <div className="field-title">
                <p>{props.fieldTitle}</p>
            </div>
        </div>
    );
}