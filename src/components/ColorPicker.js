import React from "react";

import Color from "./Color";

const ColorPicker = ({
    selectedColor,
    colors,
    onColorChange
}) => {

    const handleColorClick = (color) => {
        onColorChange(color);
    };

    var colorList = colors.map(color => {
        return (
            <Color key={color.color}
                color={color.color} 
                onClick={handleColorClick} 
                isSelected={(selectedColor === color.color)} 
                text={color.text} />
        );
    });

    return (
        <div>
            {colorList}
        </div>
    );
};

export default ColorPicker;
