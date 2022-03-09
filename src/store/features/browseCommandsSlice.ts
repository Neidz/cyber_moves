import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface browseCommandsState {
    listOfNames: string[];
    onlyUserCommands: boolean;
}

const initialState: browseCommandsState = {
    listOfNames: [],
    onlyUserCommands: false,
};

export const browseCommandsSlice = createSlice({
    name: "browseCommands",
    initialState,
    reducers: {
        changeListOfNames: (state, action: PayloadAction<string[]>) => {
            state.listOfNames = action.payload;
        },
        changeOnlyUserCommands: (state, action: PayloadAction<boolean>) => {
            state.onlyUserCommands = action.payload;
        },
    },
});

export const { changeListOfNames, changeOnlyUserCommands } = browseCommandsSlice.actions;

export default browseCommandsSlice.reducer;
export type { browseCommandsState };
