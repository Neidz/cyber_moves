import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface renderMenuState {
    currentTab: "inputs" | "commands" | "visuals";
    hidden: boolean;
    amountOfAxis: number;
}

const initialState: renderMenuState = {
    currentTab: "inputs",
    hidden: true,
    amountOfAxis: 1,
};

export const renderMenuSlice = createSlice({
    name: "renderMenu",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<"inputs" | "commands" | "visuals">) => {
            state.currentTab = action.payload;
        },
        changeHidden: (state, action: PayloadAction<boolean>) => {
            state.hidden = action.payload;
        },
        changeAmountOfAxis: (state, action: PayloadAction<number>) => {
            state.amountOfAxis = action.payload;
        },
    },
});

export const { changeTab, changeHidden, changeAmountOfAxis } = renderMenuSlice.actions;

export default renderMenuSlice.reducer;

export type { renderMenuState };
