import React, { useEffect, useRef } from "react";

const FieldHeaderPresenter = ({
    fieldTitle
}) => {
    const fieldHeaderRef = useRef(null);

    useEffect(() => {
        // document.querySelectorAll(".field-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
        fieldHeaderRef.current.style = "top:" + window.scrollY + "px";
    });

    return (
        <div className="field-header" ref={fieldHeaderRef}>
            <div className="field-title">
                <p>{fieldTitle}</p>
            </div>
        </div>
    );
};

export default FieldHeaderPresenter;
