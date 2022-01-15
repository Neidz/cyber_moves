import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAngles } from "../store/features/anglesSlice";
import { changeIsActive, changeWhichActive } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";

export const useArrows = () => {
    const { whichActive, isActive, controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const angles = useSelector((state: RootState) => state.angles);
    const dispatch = useDispatch();

    const arrowsListener = (e: KeyboardEvent) => {
        if (isActive && whichActive) {
            console.log(e);
            // left arrow click/hold lowers the angle so model rotates "to the left"
            if (e.key === "ArrowLeft") {
                dispatch(addAngles([whichActive, -controlSpeed]));
                console.log(angles.angle1);
                console.log("left");
                // right arrow click/hold increases the angle so model rotates "to the right"
            } else if (e.key === "ArrowRight") {
                console.log("right");
                dispatch(addAngles([whichActive, controlSpeed]));
                // clicking escape removes event listener so arrows no longer do anything
            } else if (e.key === "Escape") {
                dispatch(changeIsActive(false));
                console.log("esc");
            }
        }
    };

    // event listener added after user clicks on object
    useEffect(() => {
        if (isActive) {
            document.addEventListener("keydown", arrowsListener);
            console.log("listener added");
        }
        return () => document.removeEventListener("keydown", arrowsListener);

        // eslint-disable-next-line
    }, [isActive, whichActive]);

    const changeTarget = (target: number) => {
        // when clicked object is clicked again then event listener is also removed allowing user
        // to disable control by "unclicking it"
        if (isActive && whichActive === target) {
            dispatch(changeIsActive(false));
            console.log("1");
            // when one object is clicked but user clicks on another one then the second object becomes active
        } else if (isActive && whichActive !== target) {
            dispatch(changeWhichActive(target));
            console.log("2");
            // when there's no choosen object, clicked target becomes one
        } else if (!isActive) {
            console.log("3");
            dispatch(changeIsActive(true));
            dispatch(changeWhichActive(target));
        }
    };

    return changeTarget;
};
