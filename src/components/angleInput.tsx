import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anglesState, changeAngles } from "../store/features/anglesSlice";
import { limitsState } from "../store/features/limitsSlice";
import { referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { numberRegex } from "../utils/numberRegex";

interface angleInputProps {
    inputNumber: number;
}

export const AngleInput = (props: angleInputProps) => {
    const dispatch = useDispatch();
    const [tempValue, setTempValue] = useState<string>("");
    const { angles } = useSelector((state: RootState) => state);
    const { limits } = useSelector((state: RootState) => state);
    const { limitsOn } = useSelector((state: RootState) => state.options);
    const referenceColors = useSelector((state: RootState) => state.renderVisuals.referenceColors);
    const minLimit = limits[`angle${props.inputNumber}` as keyof limitsState][0];
    const maxLimit = limits[`angle${props.inputNumber}` as keyof limitsState][1];

    // validates if input for angle is correct
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if input passes regex then there's check if it doesn't exeed limits
        if (numberRegex(e.target.value)) {
            if (limitsOn) {
                if (minLimit > parseInt(e.target.value)) {
                    dispatch(changeAngles([props.inputNumber, minLimit]));
                } else if (maxLimit < parseInt(e.target.value)) {
                    dispatch(changeAngles([props.inputNumber, maxLimit]));
                } else {
                    dispatch(changeAngles([props.inputNumber, parseInt(e.target.value)]));
                }
            } else {
                dispatch(changeAngles([props.inputNumber, parseInt(e.target.value)]));
            }
            setTempValue(e.target.value);
            // if regex fails then value is only shown in input
        } else {
            setTempValue(e.target.value);
        }
    };

    // making sure that if angle of axis corresponding to that input changes through redux then value of input is also updated
    useEffect(() => {
        setTempValue(angles[`angle${props.inputNumber}` as keyof anglesState].toString());
        // eslint-disable-next-line
    }, [angles[`angle${props.inputNumber}` as keyof anglesState]]);

    return (
        <div className="axisInput">
            <h4
                style={{ color: referenceColors[`referenceColor${props.inputNumber}` as keyof referenceColorsState] }}
            >{`axis${props.inputNumber} angle`}</h4>
            <input type="text" value={tempValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};
