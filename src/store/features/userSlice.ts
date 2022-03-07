import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    loggedIn: boolean;
    username: string;
}

const initialState: userState = {
    loggedIn: false,
    username: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        },
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
});

export const { changeLoggedIn, changeUsername } = userSlice.actions;

export default userSlice.reducer;

export type { userState };
