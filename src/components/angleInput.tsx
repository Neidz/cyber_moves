import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAngles } from "../store/features/anglesSlice";
import { numberRegex } from "../utils/numberRegex";

interface angleInputProps {
    inputNumber: number;
}

export const AngleInput = (props: angleInputProps) => {
    const dispatch = useDispatch();
    const [tempValue, setTempValue] = useState<string>("");

    // validates if input for angle is correct
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if input passes regex then the value is shown in input and held in redux state
        if (numberRegex(e.target.value)) {
            dispatch(changeAngles([props.inputNumber, parseInt(e.target.value)]));
            setTempValue(e.target.value);
            // if regex fails then value is only shown in input
        } else {
            setTempValue(e.target.value);
        }
    };

    return (
        <div className="axisInput">
            <h4>{`axis${props.inputNumber}`}</h4>
            <input type="text" value={tempValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};
