import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commandState {
    speed?: number;
    angle1?: number;
    angle2?: number;
    angle3?: number;
    angle4?: number;
    angle5?: number;
    angle6?: number;
    angle7?: number;
    angle8?: number;
    angle9?: number;
    angle10?: number;
    angle11?: number;
    angle12?: number;
    angle13?: number;
    angle14?: number;
    angle15?: number;
    angle16?: number;
    angle17?: number;
    angle18?: number;
    angle19?: number;
    angle20?: number;
}

interface commandsState {
    commands: Array<commandState>;
    category: string[];
    robotType: string;
    name: string;
    username: string;
}

const initialState: commandsState = {
    commands: [],
    category: [],
    robotType: "",
    name: "",
    username: "",
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
        editCommandUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        editCommandCategory: (state, action: PayloadAction<string[]>) => {
            state.category = action.payload;
        },
        editCommandName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        editCommandRobotType: (state, action: PayloadAction<string>) => {
            state.robotType = action.payload;
        },
    },
});

export const {
    newCommand,
    editCommand,
    clearCommands,
    removeLastCommand,
    editCommandUsername,
    editCommandCategory,
    editCommandName,
    editCommandRobotType,
} = commandsSlice.actions;

export default commandsSlice.reducer;
export type { commandState };
