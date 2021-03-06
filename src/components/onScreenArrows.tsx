import "../styles/sections/onScreenArrows.scss";
import { ReactComponent as ArrowCircleLeft } from "../assets/icons/arrow-circle-left.svg";
import { ReactComponent as ArrowCircleRight } from "../assets/icons/arrow-circle-right.svg";
import { ReactComponent as PlusCircle } from "../assets/icons/plus-circle.svg";
import { ReactComponent as PlayCircle } from "../assets/icons/play-circle.svg";
import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addAngles, addAnglesWithLimits } from "../store/features/anglesSlice";
import { newCommand } from "../store/features/commandsSlice";
import { useCommand } from "../hooks/useCommand";
import { limitsState } from "../store/features/limitsSlice";

export const OnScreenArrows = () => {
    const [heldLeft, setHeldLeft] = useState<boolean>(false);
    const [heldRight, setHeldRight] = useState<boolean>(false);
    const { whichActive, isActive, controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const { angles, limits } = useSelector((state: RootState) => state);
    const { limitsOn } = useSelector((state: RootState) => state.options);
    const limitsForActive = limits[`angle${whichActive}` as keyof limitsState];
    const executeCommand = useCommand();
    const dispatch = useDispatch();

    // if any object is active then it will rotate left or right as long as coresponding arrow is held down
    useInterval(
        () => {
            if (limitsOn) {
                if (isActive && whichActive) {
                    dispatch(addAnglesWithLimits([whichActive, -controlSpeed, limitsForActive[0], limitsForActive[1]]));
                }
            } else {
                if (isActive && whichActive) {
                    dispatch(addAngles([whichActive, -controlSpeed]));
                }
            }
        },
        heldLeft ? 100 : null
    );
    useInterval(
        () => {
            if (limitsOn) {
                if (isActive && whichActive) {
                    dispatch(addAnglesWithLimits([whichActive, controlSpeed, limitsForActive[0], limitsForActive[1]]));
                }
            } else {
                if (isActive && whichActive) {
                    dispatch(addAngles([whichActive, controlSpeed]));
                }
            }
        },
        heldRight ? 100 : null
    );

    return (
        <div className="onScreenArrows">
            <ArrowCircleLeft
                onTouchStart={() => setHeldLeft(!heldLeft)}
                onMouseDown={() => setHeldLeft(!heldLeft)}
                onTouchEnd={() => setHeldLeft(!heldLeft)}
                onMouseUp={() => setHeldLeft(!heldLeft)}
            />
            <PlayCircle onClick={executeCommand} />
            <PlusCircle onClick={() => dispatch(newCommand(angles))} />
            <ArrowCircleRight
                onTouchStart={() => setHeldRight(!heldRight)}
                onMouseDown={() => setHeldRight(!heldRight)}
                onTouchEnd={() => setHeldRight(!heldRight)}
                onMouseUp={() => setHeldRight(!heldRight)}
            />
        </div>
    );
};
