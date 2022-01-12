import { configureStore } from "@reduxjs/toolkit";
import commandsReducer from "./features/commandsSlice";
import anglesReducer from "./features/anglesSlice";
import devicesReducer from "./features/devicesSlice";
import renderVisualsReducer from "./features/renderVisualsSlice";
import keyControlReducer from "./features/keyControl";

export const store = configureStore({
    reducer: {
        commands: commandsReducer,
        angles: anglesReducer,
        devices: devicesReducer,
        renderVisuals: renderVisualsReducer,
        keyControl: keyControlReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
