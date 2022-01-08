import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface renderVisualsState {
    baseColor: string;
    lampColor: string;
    planeColor: string;
    referenceColor: string;
}
// todo: change colors for lamps and reference colors to list or object
// so colors can be split for every axis
const initialState: renderVisualsState = {
    baseColor: "white",
    lampColor: "purple",
    planeColor: "black",
    referenceColor: "purple",
};

export const renderVisualsSlice = createSlice({
    name: "renderVisuals",
    initialState,
    reducers: {
        changeBaseColor: (state, action: PayloadAction<string>) => {
            state.baseColor = action.payload;
        },
        changeLampColor: (state, action: PayloadAction<string>) => {
            state.lampColor = action.payload;
        },
        changePlaneColor: (state, action: PayloadAction<string>) => {
            state.planeColor = action.payload;
        },
        changeReferenceColor: (state, action: PayloadAction<string>) => {
            state.referenceColor = action.payload;
        },
    },
});

export const { changeBaseColor, changeLampColor, changePlaneColor, changeReferenceColor } = renderVisualsSlice.actions;

export default renderVisualsSlice.reducer;

export type { renderVisualsState };
