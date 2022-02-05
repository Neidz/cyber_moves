import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deviceSizeType } from "../../utils/detectDeviceSize";

interface optionsState {
    animationSpeed: number;
    showButtons: boolean;
    deviceSize: deviceSizeType;
}

const initialState: optionsState = {
    animationSpeed: 1000,
    showButtons: true,
    deviceSize: "big",
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
    },
});

export const { changeAnimationSpeed, changeButtonsVisiblity, changeDeviceSize } = optionsSlice.actions;

export default optionsSlice.reducer;

export type { optionsState };
