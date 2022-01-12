import { Dispatch } from "redux";
import { anglesState, changeAngles } from "../../store/features/anglesSlice";
import { changeIsActive, changeWhichActive, keyControlState } from "../../store/features/keyControl";

export const moveWithArrows = (target: number, keyControl: keyControlState, angles: anglesState, dispatch: Dispatch) => {
    const { isActive, whichActive, controlSpeed } = keyControl;

    if (isActive && whichActive === target) {
        dispatch(changeIsActive(false));
    } else if (isActive && whichActive !== target) {
        dispatch(changeWhichActive(target));
    } else if (!isActive) {
        dispatch(changeIsActive(true));
        dispatch(changeWhichActive(target));
    }

    if (isActive) {
        document.addEventListener("keydown", (e) => rotateWithArrows(e, angles, target, controlSpeed, dispatch));
    }
};

const rotateWithArrows = (
    e: KeyboardEvent,
    angles: anglesState,
    target: number,
    controlSpeed: number,
    dispatch: Dispatch
) => {
    console.log(e);
    if (e.key === "ArrowLeft") {
        dispatch(changeAngles([target, angles[`angle${target}` as keyof anglesState] - controlSpeed]));
        console.log(angles.angle1);
        console.log("left");
    } else if (e.key === "ArrowRight") {
        console.log("right");
        dispatch(changeAngles([target, angles[`angle${target}` as keyof anglesState] + controlSpeed]));
    } else if (e.key === "Escape") {
        document.removeEventListener("keydown", (e) => rotateWithArrows(e, angles, target, controlSpeed, dispatch));
        console.log("esc");
    }
};
