import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    loggedIn: boolean;
    username: string;
    isHacker: boolean;
    isAdmin: boolean;
    exp: number;
}

const initialState: userState = {
    loggedIn: false,
    username: "",
    isHacker: false,
    isAdmin: false,
    exp: 0,
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
        changeIsHacker: (state, action: PayloadAction<boolean>) => {
            state.isHacker = action.payload;
        },
        changeExp: (state, action: PayloadAction<number>) => {
            state.exp = action.payload;
        },
        changeIsAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        },
    },
});

export const { changeLoggedIn, changeUsername, changeExp, changeIsAdmin, changeIsHacker } = userSlice.actions;

export default userSlice.reducer;

export type { userState };
