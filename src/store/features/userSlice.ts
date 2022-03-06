import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    formLogin: string;
    formPassword: string;
    loggedIn: boolean;
    username: string;
}

const initialState: userState = {
    loggedIn: false,
    username: "",
    formLogin: "",
    formPassword: "",
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
        changeFormLogin: (state, action: PayloadAction<string>) => {
            state.formLogin = action.payload;
        },
        changeFormPassword: (state, action: PayloadAction<string>) => {
            state.formPassword = action.payload;
        },
    },
});

export const { changeLoggedIn, changeUsername, changeFormLogin, changeFormPassword } = userSlice.actions;

export default userSlice.reducer;

export type { userState };
