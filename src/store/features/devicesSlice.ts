import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface devicesState {
    device1: boolean;
    device2: boolean;
    device3: boolean;
    device4: boolean;
    device5: boolean;
}

const initialState: devicesState = {
    device1: false,
    device2: false,
    device3: false,
    device4: false,
    device5: false,
};

export const devicesSlice = createSlice({
    name: "devices",
    initialState,
    reducers: {
        changeDevices: (state, action: PayloadAction<[componentIndex: number, newState: boolean]>) => {
            if (action.payload[0] > 0 && action.payload[0] < 6) {
                const deviceEntry = `device${action.payload[0]}`;
                state[deviceEntry as keyof devicesState] = action.payload[1];
            } else {
                console.log("wrong device number");
            }
        },
    },
});

export const { changeDevices } = devicesSlice.actions;

export default devicesSlice.reducer;

export type { devicesState };
