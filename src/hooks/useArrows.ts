import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAngles } from "../store/features/anglesSlice";
import { changeIsActive, changeWhichActive } from "../store/features/keyControlSlice";
import { RootState } from "../store/store";

export const useArrows = () => {
    const { whichActive, isActive, controlSpeed } = useSelector((state: RootState) => state.keyControl);
    const dispatch = useDispatch();

    const arrowsListener = (e: KeyboardEvent) => {
        if (isActive && whichActive) {
            // left arrow click/hold lowers the angle so model rotates "to the left"
            if (e.key === "ArrowLeft") {
                dispatch(addAngles([whichActive, -controlSpeed]));
                // right arrow click/hold increases the angle so model rotates "to the right"
            } else if (e.key === "ArrowRight") {
                dispatch(addAngles([whichActive, controlSpeed]));
                // clicking escape removes event listener so arrows no longer do anything
            } else if (e.key === "Escape") {
                dispatch(changeIsActive(false));
            }
        }
    };

    // event listener added after user clicks on object
    useEffect(() => {
        if (isActive) {
            document.addEventListener("keydown", arrowsListener);
        }
        return () => document.removeEventListener("keydown", arrowsListener);

        // eslint-disable-next-line
    }, [isActive, whichActive]);

    const changeTarget = (target: number) => {
        // when clicked object is clicked again then event listener is also removed allowing user
        // to disable control by "unclicking it"
        if (isActive && whichActive === target) {
            dispatch(changeIsActive(false));
            // when one object is clicked but user clicks on another one then the second object becomes active
        } else if (isActive && whichActive !== target) {
            dispatch(changeWhichActive(target));
            // when there's no choosen object, clicked target becomes one
        } else if (!isActive) {
            dispatch(changeIsActive(true));
            dispatch(changeWhichActive(target));
        }
    };

    return changeTarget;
};
