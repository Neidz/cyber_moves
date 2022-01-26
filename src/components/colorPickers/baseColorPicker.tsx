import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changeBaseColor } from "../../store/features/renderVisualsSlice";
import { RootState } from "../../store/store";
import { colorChangeEvent } from "../../types";
import { rgbObjectToString, rgbStringToObject } from "../../utils/rgbStringObject";

export const BaseColorPicker = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const { baseColor } = useSelector((state: RootState) => state.renderVisuals);

    const baseColorObject = rgbStringToObject(baseColor);

    const changeColor = (e: colorChangeEvent) => {
        // three.js doesn't like rgba so I'm passing only rgb values
        const { a, ...colors } = e.rgb;
        const color = rgbObjectToString(colors);
        dispatch(changeBaseColor(color));
    };

    return (
        <div className="visualElement">
            <button onClick={() => setIsOpen(!isOpen)}>baseColor</button>
            {isOpen && (
                <ChromePicker
                    color={baseColorObject ? baseColorObject : { r: 1, g: 1, b: 1 }}
                    onChange={(e: any) => changeColor(e)}
                />
            )}
        </div>
    );
};
