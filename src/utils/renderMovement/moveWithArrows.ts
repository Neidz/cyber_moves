import { Dispatch } from "redux";
import { anglesState, addAngles } from "../../store/features/anglesSlice";
import { changeIsActive, changeWhichActive, keyControlState } from "../../store/features/keyControlSlice";

export const moveWithArrows = (target: number, keyControl: keyControlState, dispatch: Dispatch) => {
    const { isActive, whichActive } = keyControl;
    if (isActive && whichActive === target) {
        dispatch(changeIsActive(false));
        console.log("1");
    } else if (isActive && whichActive !== target) {
        dispatch(changeWhichActive(target));
        console.log("2");
    } else if (!isActive) {
        console.log("3");
        dispatch(changeIsActive(true));
        dispatch(changeWhichActive(target));
    }
};

export const handleMoveWithArrowsListener = (
    e: KeyboardEvent,
    isActive: boolean,
    angles: anglesState,
    target: number,
    controlSpeed: number,
    dispatch: Dispatch
) => {
    if (isActive) {
        console.log(e);
        if (e.key === "ArrowLeft") {
            dispatch(addAngles([target, -controlSpeed]));
            console.log(angles.angle1);
            console.log("left");
        } else if (e.key === "ArrowRight") {
            console.log("right");
            dispatch(addAngles([target, controlSpeed]));
        } else if (e.key === "Escape") {
            dispatch(changeIsActive(false));
            console.log("esc");
        }
    }
};
