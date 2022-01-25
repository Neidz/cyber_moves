import "../styles/sections/optionsTab.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";
import { changeAnimationSpeed } from "../store/features/optionsSlice";

export const OptionsTab = () => {
    const { controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed } = useSelector((state: RootState) => state.options);
    const dispatch = useDispatch();

    const handleControlSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeControlSpeed(parseInt(e.target.value)));
    };
    const handleAnimationSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAnimationSpeed(Math.ceil(parseInt(e.target.value) / 50) * 50));
    };

    return (
        <div className="optionsTab">
            <div className="option">
                <h3>Speed of arrow control (angle change/frame)</h3>
                <h4 className="inputValue">{controlSpeed}</h4>
                <input type="range" value={controlSpeed} min="1" max="50" onChange={(e) => handleControlSpeedChange(e)} />
            </div>
            <div className="option">
                <h3>Commands execution animation speed (single command execution time)</h3>
                <h4 className="inputValue">{animationSpeed}</h4>
                <input
                    type="range"
                    value={animationSpeed}
                    min="50"
                    max="5000"
                    onChange={(e) => handleAnimationSpeedChange(e)}
                />
            </div>
        </div>
    );
};
