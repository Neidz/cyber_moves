import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changePlaneColor } from "../../store/features/renderVisualsSlice";
import { RootState } from "../../store/store";
import { colorChangeEvent } from "../../types";
import { rgbObjectToString, rgbStringToObject } from "../../utils/rgbStringObject";

export const PlaneColorPicker = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const { planeColor } = useSelector((state: RootState) => state.renderVisuals);

    const planeColorObject = rgbStringToObject(planeColor);

    const changeColor = (e: colorChangeEvent) => {
        // three.js doesn't like rgba so I'm passing only rgb values
        const { a, ...colors } = e.rgb;
        const color = rgbObjectToString(colors);
        dispatch(changePlaneColor(color));
    };

    return (
        <div className="visualElement">
            <button onClick={() => setIsOpen(!isOpen)}>plane color</button>
            {isOpen && (
                <ChromePicker
                    color={planeColorObject ? planeColorObject : { r: 1, g: 1, b: 1 }}
                    onChange={(e: any) => changeColor(e)}
                />
            )}
        </div>
    );
};
