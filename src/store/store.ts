import { configureStore } from "@reduxjs/toolkit";
import commandsReducer from "./features/commandsSlice";

export const store = configureStore({
    reducer: {
        commands: commandsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
