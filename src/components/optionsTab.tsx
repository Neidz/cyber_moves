import "../styles/sections/optionsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";
import { positiveNumberRegex } from "../utils/numberRegex";

export const OptionsTab = () => {
    const { controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const dispatch = useDispatch();

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (positiveNumberRegex(e.target.value)) {
            dispatch(changeControlSpeed(parseInt(e.target.value)));
        }
    };

    return (
        <div className="optionsTab">
            <h4>speed of arrow control (angle change/frame)</h4>
            <input type="string" value={controlSpeed} onChange={(e) => handleSpeedChange(e)} />
        </div>
    );
};
