import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface optionsState {
    animationSpeed: number;
}

const initialState: optionsState = {
    animationSpeed: 1000,
};

export const optionsSlice = createSlice({
    name: "options",
    initialState,
    reducers: {
        changeAnimationSpeed: (state, action: PayloadAction<number>) => {
            state.animationSpeed = action.payload;
        },
    },
});

export const { changeAnimationSpeed } = optionsSlice.actions;

export default optionsSlice.reducer;

export type { optionsState };
