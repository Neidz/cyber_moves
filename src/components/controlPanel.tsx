import "../styles/sections/controlPanel.scss";
import { useDispatch, useSelector } from "react-redux";
import { anglesState, changeAngles } from "../store/features/anglesSlice";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { RootState } from "../store/store";
import { numberRegex } from "../utils/numberRegex";

interface controlPanelProps {
    amountOfAxis: number;
}

export const ControlPanel = (props: controlPanelProps) => {
    const dispatch = useDispatch();
    const angles = useSelector((state: RootState) => state.angles);

    return (
        <div className="controlPanel">
            <div className="controlPanelInputs">
                {arrayFromNumber(props.amountOfAxis).map((key: number) => {
                    return (
                        <div className="axisInput" key={key}>
                            <h4>{`axis${key}`}</h4>
                            <input
                                type="text"
                                defaultValue={angles[`angle${key}` as keyof anglesState]}
                                onChange={(e) =>
                                    numberRegex(e.target.value) && dispatch(changeAngles([key, parseInt(e.target.value)]))
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
