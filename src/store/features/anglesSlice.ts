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
    angle11: number;
    angle12: number;
    angle13: number;
    angle14: number;
    angle15: number;
    angle16: number;
    angle17: number;
    angle18: number;
    angle19: number;
    angle20: number;
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
    angle11: 0,
    angle12: 0,
    angle13: 0,
    angle14: 0,
    angle15: 0,
    angle16: 0,
    angle17: 0,
    angle18: 0,
    angle19: 0,
    angle20: 0,
};
export const anglesSlice = createSlice({
    name: "angles",
    initialState,
    reducers: {
        changeAngles: (state, action: PayloadAction<[angleIndex: number, newValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 21) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof anglesState] = action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
        addAngles: (state, action: PayloadAction<[angleIndex: number, addValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 21) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof anglesState] = state[angleEntry as keyof anglesState] + action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
        zeroAllAngles: (state) => {
            for (let i = 0; i < 21; i++) {
                state[`angle${i}` as keyof anglesState] = 0;
            }
        },
    },
});

export const { changeAngles, addAngles, zeroAllAngles } = anglesSlice.actions;

export default anglesSlice.reducer;

export type { anglesState };
