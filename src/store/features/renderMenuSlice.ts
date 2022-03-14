import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentTab = "angles" | "commands" | "visuals" | "options" | "how it works" | "limits" | "browse commands";

interface renderMenuState {
    currentTab: currentTab;
    hidden: boolean;
    amountOfAxis: number;
}

const initialState: renderMenuState = {
    currentTab: "angles",
    hidden: true,
    amountOfAxis: 1,
};

export const renderMenuSlice = createSlice({
    name: "renderMenu",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<currentTab>) => {
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

export type { renderMenuState, currentTab };
