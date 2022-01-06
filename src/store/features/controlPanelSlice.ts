import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface controlPanelInputs {
    input1: number;
    input2: number;
    input3: number;
    input4: number;
    input5: number;
    input6: number;
    input7: number;
    input8: number;
    input9: number;
    input10: number;
}

interface controlPanelState {
    controlPanelInputs: controlPanelInputs;
}

const initialInputs: controlPanelInputs = {
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
    input7: 0,
    input8: 0,
    input9: 0,
    input10: 0,
};

const initialState: controlPanelState = {
    controlPanelInputs: initialInputs,
};

export const controlPanelSlice = createSlice({
    name: "controlPanel",
    initialState,
    reducers: {
        editInput: (state, action: PayloadAction<{ inputIndex: number; newValue: number }>) => {
            if (action.payload.inputIndex > 0 && action.payload.inputIndex < 11) {
                const inputEntry = "input" + action.payload.inputIndex;
                state.controlPanelInputs[inputEntry as keyof controlPanelInputs] = action.payload.newValue;
            }
        },
    },
});

export const { editInput } = controlPanelSlice.actions;

export default controlPanelSlice.reducer;
