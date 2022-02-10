import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface limitsState {
    angle1: [number, number];
    angle2: [number, number];
    angle3: [number, number];
    angle4: [number, number];
    angle5: [number, number];
    angle6: [number, number];
    angle7: [number, number];
    angle8: [number, number];
    angle9: [number, number];
    angle10: [number, number];
    angle11: [number, number];
    angle12: [number, number];
    angle13: [number, number];
    angle14: [number, number];
    angle15: [number, number];
    angle16: [number, number];
    angle17: [number, number];
    angle18: [number, number];
    angle19: [number, number];
    angle20: [number, number];
}

const initialState: limitsState = {
    angle1: [-360, 360],
    angle2: [-360, 360],
    angle3: [-360, 360],
    angle4: [-360, 360],
    angle5: [-360, 360],
    angle6: [-360, 360],
    angle7: [-360, 360],
    angle8: [-360, 360],
    angle9: [-360, 360],
    angle10: [-360, 360],
    angle11: [-360, 360],
    angle12: [-360, 360],
    angle13: [-360, 360],
    angle14: [-360, 360],
    angle15: [-360, 360],
    angle16: [-360, 360],
    angle17: [-360, 360],
    angle18: [-360, 360],
    angle19: [-360, 360],
    angle20: [-360, 360],
};
export const limitsSlice = createSlice({
    name: "limits",
    initialState,
    reducers: {
        changeMinLimit: (state, action: PayloadAction<[angleIndex: number, newValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 21) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof limitsState][0] = action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
        changeMaxLimit: (state, action: PayloadAction<[angleIndex: number, newValue: number]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 21) {
                const angleEntry = `angle${action.payload[0]}`;
                state[angleEntry as keyof limitsState][1] = action.payload[1];
            } else {
                console.log("wrong angle choosen");
            }
        },
        resetLimits: (state) => {
            for (let i = 0; i < 21; i++) {
                state[`angle${i}` as keyof limitsState] = [-360, 360];
            }
        },
    },
});

export const { changeMinLimit, changeMaxLimit, resetLimits } = limitsSlice.actions;

export default limitsSlice.reducer;

export type { limitsState };
