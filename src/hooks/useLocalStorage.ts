import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { changeAnimationSpeed, changeButtonsVisiblity } from "../store/features/optionsSlice";
import {
    changeActiveColor,
    changeAllReferenceColors,
    changeBaseColor,
    changePlaneColor,
} from "../store/features/renderVisualsSlice";

export type localStorageItems =
    | "baseColor"
    | "planeColor"
    | "referenceColors"
    | "activeColor"
    | "controlSpeed"
    | "animationSpeed"
    | "showButtons";

// updates redux store with values from localstorage
export const useLocalStorage = () => {
    // from renderVisuals
    const baseColorStorage = localStorage.getItem("baseColor");
    const planeColorStorage = localStorage.getItem("planeColor");
    const activeColorStorage = localStorage.getItem("activeColor");
    const referenceColorsStorage = localStorage.getItem("referenceColors");
    // from keyControl
    const controlSpeedStorage = localStorage.getItem("controlSpeed");
    // from options
    const animationSpeedStorage = localStorage.getItem("animationSpeed");
    const showButtonsStorage = localStorage.getItem("showButtons");

    const dispatch = useDispatch();

    useEffect(() => {
        baseColorStorage && dispatch(changeBaseColor(baseColorStorage));
        planeColorStorage && dispatch(changePlaneColor(planeColorStorage));
        referenceColorsStorage && dispatch(changeAllReferenceColors(JSON.parse(referenceColorsStorage)));
        activeColorStorage && dispatch(changeActiveColor(activeColorStorage));
        controlSpeedStorage && dispatch(changeControlSpeed(JSON.parse(controlSpeedStorage)));
        animationSpeedStorage && dispatch(changeAnimationSpeed(JSON.parse(animationSpeedStorage)));
        showButtonsStorage && dispatch(changeButtonsVisiblity(JSON.parse(showButtonsStorage)));
    });
};
