import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changeReferenceColor, referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { rgbObjectToString, rgbStringToObject } from "../utils/rgbStringObject";

interface colorChangEvent {
    rgb: { r: number; g: number; b: number; a: number };
}

export const ReferenceColorPicker = (props: { angleNumber: number }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const referenceColor = useSelector(
        (state: RootState) =>
            state.renderVisuals.referenceColors[`referenceColor${props.angleNumber}` as keyof referenceColorsState]
    );
    const referenceColorObject = rgbStringToObject(referenceColor);

    const changeColor = (e: colorChangEvent) => {
        // three.js doesn't like rgba so I'm passing only rgb values
        const { a, ...colors } = e.rgb;
        const color = rgbObjectToString(colors);
        dispatch(changeReferenceColor([props.angleNumber, color]));
    };

    return (
        <div className="axis">
            <button onClick={() => setIsOpen(!isOpen)}>axis{props.angleNumber}</button>
            {isOpen && (
                <ChromePicker
                    color={referenceColorObject ? referenceColorObject : { r: 1, g: 1, b: 1 }}
                    onChange={(e: any) => changeColor(e)}
                />
            )}
        </div>
    );
};
