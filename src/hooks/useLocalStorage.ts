import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeControlSpeed } from "../store/features/keyControlSlice";
import { changeAnimationSpeed, changeButtonsVisiblity, changeLimitsOn } from "../store/features/optionsSlice";
import {
    changeActiveColor,
    changeAllReferenceColors,
    changeBaseColor,
    changePlaneColor,
} from "../store/features/renderVisualsSlice";
import { changeExp, changeIsAdmin, changeIsHacker, changeLoggedIn, changeUsername } from "../store/features/userSlice";
import { decodedTokenType } from "../types";

export type localStorageItems =
    | "baseColor"
    | "planeColor"
    | "referenceColors"
    | "activeColor"
    | "controlSpeed"
    | "animationSpeed"
    | "showButtons"
    | "limitsOn"
    | "token";

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
    const limitsOnStorage = localStorage.getItem("limitsOn");
    // from user
    const token = localStorage.getItem("token");
    const decodedToken: decodedTokenType | null | "" = token && jwt_decode(token);

    const dispatch = useDispatch();

    useEffect(() => {
        baseColorStorage && dispatch(changeBaseColor(baseColorStorage));
        planeColorStorage && dispatch(changePlaneColor(planeColorStorage));
        referenceColorsStorage && dispatch(changeAllReferenceColors(JSON.parse(referenceColorsStorage)));
        activeColorStorage && dispatch(changeActiveColor(activeColorStorage));

        controlSpeedStorage && dispatch(changeControlSpeed(JSON.parse(controlSpeedStorage)));

        animationSpeedStorage && dispatch(changeAnimationSpeed(JSON.parse(animationSpeedStorage)));
        showButtonsStorage && dispatch(changeButtonsVisiblity(JSON.parse(showButtonsStorage)));
        limitsOnStorage && dispatch(changeLimitsOn(JSON.parse(limitsOnStorage)));

        if (decodedToken) {
            dispatch(changeLoggedIn(true));
            dispatch(changeUsername(decodedToken.username));
            dispatch(changeIsHacker(decodedToken.isHacker));
            dispatch(changeIsAdmin(decodedToken.isAdmin));
            dispatch(changeExp(decodedToken.exp));
        }

        // eslint-disable-next-line
    }, []);
};
