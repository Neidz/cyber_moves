import "../styles/sections/optionsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";
import { changeAnimationSpeed, changeButtonsVisiblity } from "../store/features/optionsSlice";
import { updateStorage } from "../utils/updateStorage";

export const OptionsTab = () => {
    const { controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed } = useSelector((state: RootState) => state.options);
    const { showButtons } = useSelector((state: RootState) => state.options);
    const dispatch = useDispatch();

    const handleControlSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeControlSpeed(parseInt(e.target.value)));
        updateStorage("controlSpeed", e.target.value);
    };
    const handleAnimationSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAnimationSpeed(Math.ceil(parseInt(e.target.value) / 50) * 50));
        updateStorage("animationSpeed", Math.ceil(parseInt(e.target.value) / 50) * 50);
    };

    return (
        <div className="optionsTab">
            <h2>Options</h2>
            <div className="option">
                <h3>speed of arrow control (angle change/frame)</h3>
                <h4 className="inputValue">{controlSpeed}</h4>
                <input type="range" value={controlSpeed} min="1" max="50" onChange={(e) => handleControlSpeedChange(e)} />
            </div>
            <div className="option">
                <h3>commands execution animation speed (single command execution time)</h3>
                <h4 className="inputValue">{animationSpeed}</h4>
                <input
                    type="range"
                    value={animationSpeed}
                    min="50"
                    max="5000"
                    onChange={(e) => handleAnimationSpeedChange(e)}
                />
            </div>
            <div className="option">
                <button onClick={() => dispatch(changeButtonsVisiblity(!showButtons))}>
                    {showButtons ? "hide buttons on the bottom of the screen" : "show buttons on the bottom of the screen"}
                </button>
            </div>
        </div>
    );
};
