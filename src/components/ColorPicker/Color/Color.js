import React from "react";

import "./Color.css";

const Color = (props) => {

    const colorStyle = {
        backgroundColor: props.color
    };

    const handleColorClick = () => {
        props.onClick(props.color);
    };

    return (
        <div className="color-container" onClick={handleColorClick}>
            <div className="color-content">
                <div className="color-div-container" style={colorStyle}>
                    <div className={props.isSelected ? "color-div" : ""}></div>
                </div>
            </div>
            <div className="color-text-container">
                {props.text}
            </div>
        </div>
    );
};

export default Color;
