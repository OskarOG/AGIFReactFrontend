import React, { useEffect } from "react";

const FieldHeader = (props) => {
    useEffect(() => {
        document.querySelectorAll(".field-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
    });

    return (
        <div className="field-header">
            <div className="field-title">
                <p>{props.fieldTitle}</p>
            </div>
        </div>
    );
};

export default FieldHeader;