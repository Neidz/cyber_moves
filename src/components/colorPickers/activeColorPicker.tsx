import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveColor } from "../../store/features/renderVisualsSlice";
import { RootState } from "../../store/store";
import { colorChangeEvent } from "../../types";
import { rgbObjectToString, rgbStringToObject } from "../../utils/rgbStringObject";

export const ActiveColorPicker = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    const { activeColor } = useSelector((state: RootState) => state.renderVisuals);

    const activeColorObject = rgbStringToObject(activeColor);

    const changeColor = (e: colorChangeEvent) => {
        // three.js doesn't like rgba so I'm passing only rgb values
        const { a, ...colors } = e.rgb;
        const color = rgbObjectToString(colors);
        dispatch(changeActiveColor(color));
    };

    return (
        <div className="visualElement">
            <button onClick={() => setIsOpen(!isOpen)}>active color</button>
            {isOpen && (
                <ChromePicker
                    color={activeColorObject ? activeColorObject : { r: 1, g: 1, b: 1 }}
                    onChange={(e: any) => changeColor(e)}
                />
            )}
        </div>
    );
};
