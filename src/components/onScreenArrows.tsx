import "../styles/sections/onScreenArrows.scss";
import { ReactComponent as ArrowCircleLeft } from "../assets/icons/arrow-circle-left.svg";
import { ReactComponent as ArrowCircleRight } from "../assets/icons/arrow-circle-right.svg";
import { ReactComponent as PlusCircle } from "../assets/icons/plus-circle.svg";
import { useState } from "react";
import useInterval from "../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addAngles } from "../store/features/anglesSlice";

export const OnScreenArrows = () => {
    const [heldLeft, setHeldLeft] = useState<boolean>(false);
    const [heldRight, setHeldRight] = useState<boolean>(false);
    const { whichActive, isActive, controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const dispatch = useDispatch();

    useInterval(
        () => {
            if (isActive && whichActive) {
                dispatch(addAngles([whichActive, -controlSpeed]));
            }
        },
        heldLeft ? 100 : null
    );
    useInterval(
        () => {
            if (isActive && whichActive) {
                dispatch(addAngles([whichActive, controlSpeed]));
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
            <PlusCircle />
            <ArrowCircleRight
                onTouchStart={() => setHeldRight(!heldRight)}
                onMouseDown={() => setHeldRight(!heldRight)}
                onTouchEnd={() => setHeldRight(!heldRight)}
                onMouseUp={() => setHeldRight(!heldRight)}
            />
        </div>
    );
};
