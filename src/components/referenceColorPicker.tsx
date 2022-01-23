import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changeReferenceColor, referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { rgbObjectToString, rgbStringToObject } from "../utils/rgbStringObject";

interface colorChangEvent {
    rgb: { r: number; g: number; b: number; a: number };
}

export const ReferenceColorPicker = (props: { angle: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const angleNumber = parseInt(props.angle.replace("angle", ""));
    const referenceColor = useSelector(
        (state: RootState) =>
            state.renderVisuals.referenceColors[`referenceColor${angleNumber}` as keyof referenceColorsState]
    );
    const referenceColorObject = rgbStringToObject(referenceColor);

    const changeColor = (e: colorChangEvent) => {
        // three.js doesn't like rgba so I'm passing only rgb values
        const { a, ...colors } = e.rgb;
        const color = rgbObjectToString(colors);
        dispatch(changeReferenceColor([angleNumber, color]));
    };

    return (
        <div>
            <h4 onClick={() => setIsOpen(!isOpen)}>axis{angleNumber}</h4>
            {isOpen && (
                <ChromePicker
                    color={referenceColorObject ? referenceColorObject : { r: 1, g: 1, b: 1 }}
                    onChange={(e: any) => changeColor(e)}
                />
            )}
        </div>
    );
};
