import "../styles/sections/controlPanel.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlPanelInputs, editInput } from "../store/features/controlPanelSlice";
import { arrayFromNumber } from "../utils/arrayFromNumbe";
import { RootState } from "../store/store";
import { numberRegex } from "../utils/numberRegex";

interface controlPanelProps {
    amountOfAxis: number | "multiple";
}

export const ControlPanel = (props: controlPanelProps) => {
    const [amountofAxis] = useState<number>(typeof props.amountOfAxis === "number" ? props.amountOfAxis : 6);
    const dispatch = useDispatch();
    const inputs = useSelector((state: RootState) => state.controlPanel.controlPanelInputs);

    return (
        <div className="controlPanel">
            <div className="controlPanelInputs">
                {arrayFromNumber(amountofAxis).map((key: number) => {
                    return (
                        <div className="axisInput" key={key}>
                            <h4>{`axis${key}`}</h4>
                            <input
                                type="text"
                                defaultValue={inputs[`input${key}` as keyof controlPanelInputs]}
                                onChange={(e) =>
                                    numberRegex(e.target.value) && dispatch(editInput([key, parseInt(e.target.value)]))
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
