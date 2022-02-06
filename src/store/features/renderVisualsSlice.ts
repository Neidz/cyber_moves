import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deviceColorsState {
    deviceColor1: string;
    deviceColor2: string;
    deviceColor3: string;
    deviceColor4: string;
    deviceColor5: string;
}
interface referenceColorsState {
    referenceColor1: string;
    referenceColor2: string;
    referenceColor3: string;
    referenceColor4: string;
    referenceColor5: string;
    referenceColor6: string;
    referenceColor7: string;
    referenceColor8: string;
    referenceColor9: string;
    referenceColor10: string;
    referenceColor11: string;
    referenceColor12: string;
    referenceColor13: string;
    referenceColor14: string;
    referenceColor15: string;
    referenceColor16: string;
    referenceColor17: string;
    referenceColor18: string;
    referenceColor19: string;
    referenceColor20: string;
}
interface renderVisualsState {
    baseColor: string;
    deviceColors: deviceColorsState;
    planeColor: string;
    referenceColors: referenceColorsState;
    activeColor: string;
}

const deviceColorsInitial = {
    deviceColor1: "rgb(222, 0, 0)",
    deviceColor2: "rgb(219, 138, 42)",
    deviceColor3: "rgb(207, 222, 0)",
    deviceColor4: "rgb(91, 255, 7)",
    deviceColor5: "rgb(0, 222, 128)",
};
const referenceColorsInitial = {
    referenceColor1: "rgb(255, 0, 0)",
    referenceColor2: "rgb(255, 38, 0)",
    referenceColor3: "rgb(255, 105, 0)",
    referenceColor4: "rgb(124, 255, 7)",
    referenceColor5: "rgb(6, 222, 128)",
    referenceColor6: "rgb(10, 253, 76)",
    referenceColor7: "rgb(0, 241, 255)",
    referenceColor8: "rgb(2, 43, 254)",
    referenceColor9: "rgb(214, 0, 222)",
    referenceColor10: "rgb(0, 3, 255)",
    referenceColor11: "rgb(25, 0, 255)",
    referenceColor12: "rgb(241, 0, 255)",
    referenceColor13: "rgb(200, 222, 0)",
    referenceColor14: "rgb(255, 0, 36)",
    referenceColor15: "rgb(97, 8, 8)",
    referenceColor16: "rgb(79, 51, 5)",
    referenceColor17: "rgb(17, 83, 3)",
    referenceColor18: "rgb(1, 81, 51)",
    referenceColor19: "rgb(1, 41, 81)",
    referenceColor20: "rgb(12, 1, 81)",
};

const initialState: renderVisualsState = {
    baseColor: "rgb(19, 18, 18)",
    deviceColors: deviceColorsInitial,
    planeColor: "rgb(16, 34, 222)",
    referenceColors: referenceColorsInitial,
    activeColor: "rgb(255, 255, 255)",
};

export const renderVisualsSlice = createSlice({
    name: "renderVisuals",
    initialState,
    reducers: {
        changeBaseColor: (state, action: PayloadAction<string>) => {
            state.baseColor = action.payload;
        },
        changeDeviceColor: (state, action: PayloadAction<[deviceIndex: number, newColor: string]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 6) {
                const deviceEntry = `deviceColor${action.payload[0]}`;
                state.deviceColors[deviceEntry as keyof deviceColorsState] = action.payload[1];
            } else {
                console.log("wrong deviceColor choosen");
            }
        },
        changePlaneColor: (state, action: PayloadAction<string>) => {
            state.planeColor = action.payload;
        },
        changeActiveColor: (state, action: PayloadAction<string>) => {
            state.activeColor = action.payload;
        },
        changeReferenceColor: (state, action: PayloadAction<[referenceIndex: number, newColor: string]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 21) {
                const referenceEntry = `referenceColor${action.payload[0]}`;
                state.referenceColors[referenceEntry as keyof referenceColorsState] = action.payload[1];
            } else {
                console.log("wrong referenceColor choosen");
            }
        },
        changeAllReferenceColors: (state, action: PayloadAction<referenceColorsState>) => {
            state.referenceColors = action.payload;
        },
    },
});

export const {
    changeBaseColor,
    changeDeviceColor,
    changePlaneColor,
    changeReferenceColor,
    changeActiveColor,
    changeAllReferenceColors,
} = renderVisualsSlice.actions;

export default renderVisualsSlice.reducer;

export type { renderVisualsState, deviceColorsState, referenceColorsState };
