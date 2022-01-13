import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface anglesState {
    angle1: number;
    angle2: number;
    angle3: number;
    angle4: number;
    angle5: number;
    angle6: number;
    angle7: number;
    angle8: number;
    angle9: number;
    angle10: number;
}

const initialState: anglesState = {
    angle1: 0,
    angle2: 0,
    angle3: 0,
    angle4: 0,
    angle5: 0,
    angle6: 0,
    angle7: 0,
    angle8: 0,
    angle9: 0,
    angle10: 0,
};

export const anglesSlice = createSlice({
    name: "angles",
    initialState,
    reducers: {
        changeAngles: (state, action: PayloadAction<[angleIndex: number, newValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 11) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof anglesState] = action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
        addAngles: (state, action: PayloadAction<[angleIndex: number, addValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 11) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof anglesState] = state[angleEntry as keyof anglesState] + action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
    },
});

export const { changeAngles, addAngles } = anglesSlice.actions;

export default anglesSlice.reducer;

export type { anglesState };
