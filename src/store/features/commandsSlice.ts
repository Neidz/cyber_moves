import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface command {
    speed?: number;
    axis1?: number;
    axis2?: number;
    axis3?: number;
    axis4?: number;
    axis5?: number;
    axis6?: number;
    axis7?: number;
    axis8?: number;
    axis9?: number;
    axis10?: number;
}

interface commandsState {
    commands: Array<command>;
    createdBy: string;
    category: string;
}

const initialState: commandsState = {
    commands: [],
    createdBy: "unkown",
    category: "unkown",
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
        editUser: (state, action: PayloadAction<string>) => {
            state.createdBy = action.payload;
        },
        editCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    },
});

export const { newCommand, editCommand } = commandsSlice.actions;

export default commandsSlice.reducer;
export type { command };
