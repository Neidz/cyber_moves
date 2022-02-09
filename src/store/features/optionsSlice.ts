import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deviceSizeType } from "../../utils/detectDeviceSize";

interface optionsState {
    animationSpeed: number;
    showButtons: boolean;
    deviceSize: deviceSizeType;
    limitsOn: boolean;
}

const initialState: optionsState = {
    animationSpeed: 1000,
    showButtons: true,
    deviceSize: "big",
    limitsOn: false,
};

export const optionsSlice = createSlice({
    name: "options",
    initialState,
    reducers: {
        changeAnimationSpeed: (state, action: PayloadAction<number>) => {
            state.animationSpeed = action.payload;
        },
        changeButtonsVisiblity: (state, action: PayloadAction<boolean>) => {
            state.showButtons = action.payload;
            console.log("y");
        },
        changeDeviceSize: (state, action: PayloadAction<deviceSizeType>) => {
            state.deviceSize = action.payload;
        },
        changeLimitsOn: (state, action: PayloadAction<boolean>) => {
            state.limitsOn = action.payload;
        },
    },
});

export const { changeAnimationSpeed, changeButtonsVisiblity, changeDeviceSize, changeLimitsOn } = optionsSlice.actions;

export default optionsSlice.reducer;

export type { optionsState };
