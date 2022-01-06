import { configureStore } from "@reduxjs/toolkit";
import commandsReducer from "./features/commandsSlice";
import controlPanelReducer from "./features/controlPanelSlice";

export const store = configureStore({
    reducer: {
        commands: commandsReducer,
        controlPanel: controlPanelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
