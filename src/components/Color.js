import React from "react";

const Color = ({
    color,
    isSelected,
    text,
    onClick
}) => {

    const colorStyle = {
        backgroundColor: color
    };

    const handleColorClick = () => {
        onClick(color);
    };

    return (
        <div className="color-container" onClick={handleColorClick}>
            <div className="color-content">
                <div className="color-div-container" style={colorStyle}>
                    <div className={isSelected ? "color-div" : ""}></div>
                </div>
            </div>
            <div className="color-text-container">
                {text}
            </div>
        </div>
    );
};

export default Color;
