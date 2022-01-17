import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anglesState, changeAngles } from "../store/features/anglesSlice";
import { RootState } from "../store/store";
import { numberRegex } from "../utils/numberRegex";

interface angleInputProps {
    inputNumber: number;
}

export const AngleInput = (props: angleInputProps) => {
    const dispatch = useDispatch();
    const [tempValue, setTempValue] = useState<string>("");
    const angles = useSelector((state: RootState) => state.angles);

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

    // making sure that if angle of axis corresponding to that input changes through redux then value of input is also updated
    useEffect(() => {
        setTempValue(angles[`angle${props.inputNumber}` as keyof anglesState].toString());
        // eslint-disable-next-line
    }, [angles[`angle${props.inputNumber}` as keyof anglesState]]);

    return (
        <div className="axisInput">
            <h4>{`axis${props.inputNumber}`}</h4>
            <input type="text" value={tempValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};
