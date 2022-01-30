import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface optionsState {
    animationSpeed: number;
    showButtons: boolean;
}

const initialState: optionsState = {
    animationSpeed: 1000,
    showButtons: true,
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
    },
});

export const { changeAnimationSpeed, changeButtonsVisiblity } = optionsSlice.actions;

export default optionsSlice.reducer;

export type { optionsState };
