import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface command {
    axis1?: number;
    axis2?: number;
    axis3?: number;
    axis4?: number;
    axis5?: number;
    axis6?: number;
    time?: number;
}

interface commandsState {
    commands: Array<command>;
}

const initialState: commandsState = {
    commands: [],
};

export const commandsSlice = createSlice({
    name: "commands",
    initialState,
    reducers: {
        newCommand: (state, action: PayloadAction<command>) => {
            state.commands.push(action.payload);
        },
        editCommand: (state, action: PayloadAction<{ commandIndex: number; newCommand: command }>) => {
            if (state.commands.length - 1 < action.payload.commandIndex) {
                console.log(`list of commands doesn't have index ${action.payload.commandIndex}`);
            } else {
                state.commands[action.payload.commandIndex] = action.payload.newCommand;
            }
        },
    },
});

export const { newCommand, editCommand } = commandsSlice.actions;

export default commandsSlice.reducer;
export type { command };
