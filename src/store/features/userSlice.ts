import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    loggedIn: boolean;
    username: string;
    isHacker: boolean;
    // this is not used as a proof that someone is admin, I might use it to show some icons or options in the future
    // actual admin authentication will take place on the backend
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
        changeToDefault: (state) => {
            state.exp = 0;
            state.isAdmin = false;
            state.isHacker = false;
            state.loggedIn = false;
            state.username = "";
        },
    },
});

export const { changeLoggedIn, changeUsername, changeExp, changeIsAdmin, changeIsHacker, changeToDefault } =
    userSlice.actions;

export default userSlice.reducer;

export type { userState };
