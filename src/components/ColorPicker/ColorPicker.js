import React from "react";

import "./ColorPicker.css";

import Color from "../Color/Color";

const ColorPicker = (props) => {

    const handleColorClick = (color) => {
        props.onColorChange(color);
    };

    var colorList = props.colors.map(color => {
        return (
            <Color key={color.color} color={color.color} onClick={handleColorClick} isSelected={(props.selectedColor === color.color)} text={color.text} />
        );
    });

    return (
        <div>
            {colorList}
        </div>
    );
};

export default ColorPicker;
