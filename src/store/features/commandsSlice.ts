import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commandState {
    speed?: number;
    angle1?: number;
    angle2?: number;
    angle3?: number;
    angle4?: number;
    angle5?: number;
    angle?: number;
    angle7?: number;
    angle8?: number;
    angle9?: number;
    angle10?: number;
}

interface commandsState {
    commands: Array<commandState>;
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
        newCommand: (state, action: PayloadAction<commandState>) => {
            state.commands.push(action.payload);
        },
        editCommand: (state, action: PayloadAction<{ commandIndex: number; newCommand: commandState }>) => {
            if (state.commands.length - 1 < action.payload.commandIndex) {
                console.log(`list of commands doesn't have index ${action.payload.commandIndex}`);
            } else {
                state.commands[action.payload.commandIndex] = action.payload.newCommand;
            }
        },
        clearCommands: (state) => {
            state.commands = [];
        },
        removeLastCommand: (state) => {
            state.commands.pop();
        },
        editUser: (state, action: PayloadAction<string>) => {
            state.createdBy = action.payload;
        },
        editCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    },
});

export const { newCommand, editCommand, clearCommands, removeLastCommand, editUser, editCategory } = commandsSlice.actions;

export default commandsSlice.reducer;
export type { commandState };
