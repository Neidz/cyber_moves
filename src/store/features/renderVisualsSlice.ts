import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface color {
    r: number;
    g: number;
    b: number;
}
interface deviceColorsState {
    deviceColor1: color;
    deviceColor2: color;
    deviceColor3: color;
    deviceColor4: color;
    deviceColor5: color;
}
interface referenceColorsState {
    referenceColor1: color;
    referenceColor2: color;
    referenceColor3: color;
    referenceColor4: color;
    referenceColor5: color;
    referenceColor6: color;
    referenceColor7: color;
    referenceColor8: color;
    referenceColor9: color;
    referenceColor10: color;
}
interface renderVisualsState {
    baseColor: color;
    deviceColors: deviceColorsState;
    planeColor: color;
    referenceColors: referenceColorsState;
}

const deviceColorsInitial = {
    deviceColor1: { r: 0.87, g: 0.0, b: 0.0 },
    deviceColor2: { r: 0.87, g: 0.47, b: 0.0 },
    deviceColor3: { r: 0.81, g: 0.87, b: 0.0 },
    deviceColor4: { r: 0.32, g: 0.87, b: 0.0 },
    deviceColor5: { r: 0.0, g: 0.87, b: 0.5 },
};
const referenceColorsInitial = {
    referenceColor1: { r: 0.87, g: 0.0, b: 0.0 },
    referenceColor2: { r: 0.87, g: 0.47, b: 0.0 },
    referenceColor3: { r: 0.81, g: 0.87, b: 0.0 },
    referenceColor4: { r: 0.32, g: 0.87, b: 0.0 },
    referenceColor5: { r: 0.0, g: 0.87, b: 0.5 },
    referenceColor6: { r: 0.0, g: 0.87, b: 0.87 },
    referenceColor7: { r: 0.0, g: 0.1, b: 0.87 },
    referenceColor8: { r: 0.44, g: 0.0, b: 0.87 },
    referenceColor9: { r: 0.84, g: 0.0, b: 0.87 },
    referenceColor10: { r: 0.87, g: 0.0, b: 0.35 },
};
const initialState: renderVisualsState = {
    baseColor: { r: 0.12, g: 0.12, b: 0.12 },
    deviceColors: deviceColorsInitial,
    planeColor: { r: 0.0, g: 0.0, b: 0.0 },
    referenceColors: referenceColorsInitial,
};

export const renderVisualsSlice = createSlice({
    name: "renderVisuals",
    initialState,
    reducers: {
        changeBaseColor: (state, action: PayloadAction<color>) => {
            state.baseColor = action.payload;
        },
        changeDeviceColor: (state, action: PayloadAction<[deviceIndex: number, newColor: color]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 6) {
                const deviceEntry = `deviceColor${action.payload[0]}`;
                state.deviceColors[deviceEntry as keyof deviceColorsState] = action.payload[1];
            } else {
                console.log("wrong deviceColor choosen");
            }
        },
        changePlaneColor: (state, action: PayloadAction<color>) => {
            state.planeColor = action.payload;
        },
        changeReferenceColor: (state, action: PayloadAction<[referenceIndex: number, newColor: color]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 11) {
                const referenceEntry = `referenceColor${action.payload[0]}`;
                state.referenceColors[referenceEntry as keyof referenceColorsState] = action.payload[1];
            } else {
                console.log("wrong referenceColor choosen");
            }
        },
    },
});

export const { changeBaseColor, changeDeviceColor, changePlaneColor, changeReferenceColor } = renderVisualsSlice.actions;

export default renderVisualsSlice.reducer;

export type { renderVisualsState, deviceColorsState, referenceColorsState };
