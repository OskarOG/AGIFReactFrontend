import React, { useEffect, useRef } from "react";

const FieldHeaderPresenter = ({
    fieldTitle
}) => {
    const fieldHeaderRef = useRef(null);

    let vertScroll = -1000;
    useEffect(() => {
        // document.querySelectorAll(".field-header").forEach((e) => e.style = "top:" + window.scrollY + "px");
        fieldHeaderRef.current.style = "top:" + window.scrollY + "px";

        window.addEventListener('scroll', (e) => {
            if (e.currentTarget.scrollY != vertScroll) {
                vertScroll = e.currentTarget.scrollY;
                window.requestAnimationFrame(() => fieldHeaderRef.current.style = "top:" + vertScroll + "px");
                // document.querySelectorAll(".field-header").forEach((e) => e.style = "top:" + pxls + "px");
            }
        });
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
