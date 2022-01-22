import "../styles/sections/optionsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";

export const OptionsTab = () => {
    const { controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const dispatch = useDispatch();

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeControlSpeed(parseInt(e.target.value)));
    };

    return (
        <div className="optionsTab">
            <h4>speed of arrow control (angle change/frame)</h4>
            <h4 className="controlSpeedValue">{controlSpeed}</h4>
            <input type="range" value={controlSpeed} min="1" max="50" onChange={(e) => handleSpeedChange(e)} />
        </div>
    );
};
