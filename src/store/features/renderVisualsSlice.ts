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
    referenceColor1: "rgb(222, 0, 0)",
    referenceColor2: "rgb(219, 138, 42)",
    referenceColor3: "rgb(200, 222, 0)",
    referenceColor4: "rgb(91, 255, 7)",
    referenceColor5: "rgb(0, 222, 128)",
    referenceColor6: "rgb(10, 107, 253)",
    referenceColor7: "rgb(0, 26, 222)",
    referenceColor8: "rgb(127, 40, 213)",
    referenceColor9: "rgb(214, 0, 222)",
    referenceColor10: "rgb(222, 0, 89)",
};

const initialState: renderVisualsState = {
    baseColor: "rgb(31, 31, 31)",
    deviceColors: deviceColorsInitial,
    planeColor: "rgb(17, 3, 227)",
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
            if (action.payload[0] > 0 && action.payload[0] < 11) {
                const referenceEntry = `referenceColor${action.payload[0]}`;
                state.referenceColors[referenceEntry as keyof referenceColorsState] = action.payload[1];
            } else {
                console.log("wrong referenceColor choosen");
            }
        },
    },
});

export const { changeBaseColor, changeDeviceColor, changePlaneColor, changeReferenceColor, changeActiveColor } =
    renderVisualsSlice.actions;

export default renderVisualsSlice.reducer;

export type { renderVisualsState, deviceColorsState, referenceColorsState };
