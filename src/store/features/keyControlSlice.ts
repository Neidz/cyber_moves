import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface keyControlState {
    isActive: boolean;
    whichActive: number;
    controlSpeed: number;
}

const initialState: keyControlState = {
    isActive: false,
    whichActive: 1,
    controlSpeed: 5,
};

export const keyControlSlice = createSlice({
    name: "keyControl",
    initialState,
    reducers: {
        changeIsActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        },
        changeWhichActive: (state, action: PayloadAction<number>) => {
            state.whichActive = action.payload;
        },
        changeControlSpeed: (state, action: PayloadAction<number>) => {
            state.controlSpeed = action.payload;
        },
    },
});

export const { changeControlSpeed, changeIsActive, changeWhichActive } = keyControlSlice.actions;

export default keyControlSlice.reducer;

export type { keyControlState };
