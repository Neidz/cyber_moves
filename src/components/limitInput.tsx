import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMaxLimit, changeMinLimit, limitsState } from "../store/features/limitsSlice";
import { referenceColorsState } from "../store/features/renderVisualsSlice";
import { RootState } from "../store/store";
import { numberRegex } from "../utils/numberRegex";

interface limitInputProps {
    inputNumber: number;
    limit: "min" | "max";
}

export const LimitInput = (props: limitInputProps) => {
    const dispatch = useDispatch();
    const [tempValue, setTempValue] = useState<string>("");
    const { referenceColors } = useSelector((state: RootState) => state.renderVisuals);
    const { limits } = useSelector((state: RootState) => state);
    const limit =
        props.limit === "min"
            ? limits[`angle${props.inputNumber}` as keyof limitsState][0]
            : limits[`angle${props.inputNumber}` as keyof limitsState][1];

    // validates if input for limit is correct
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if input passes regex then the value is shown in input and held in redux state
        if (numberRegex(e.target.value)) {
            if (props.limit === "min") {
                dispatch(changeMinLimit([props.inputNumber, parseInt(e.target.value)]));
            } else {
                dispatch(changeMaxLimit([props.inputNumber, parseInt(e.target.value)]));
            }
            setTempValue(e.target.value);
            // if regex fails then value is only shown in input
        } else {
            setTempValue(e.target.value);
        }
    };

    // making sure that if limit is updated
    useEffect(() => {
        setTempValue(limit.toString());
        // eslint-disable-next-line
    }, [limit]);

    return (
        <div className="limitInput">
            <h4
                style={{ color: referenceColors[`referenceColor${props.inputNumber}` as keyof referenceColorsState] }}
            >{`axis${props.inputNumber} ${props.limit === "min" ? "min" : "max"} angle`}</h4>
            <input type="text" value={tempValue} onChange={(e) => handleChange(e)} />
        </div>
    );
};
