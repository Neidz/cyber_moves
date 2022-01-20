import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCommands } from "../store/features/commandsSlice";

// clears all the currently stored commands for movement of models
// used when user changes page because different pages have different amount of inputs
// and commands with different amounts of angles would be messy
export const useCleanUp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCommands());
        // eslint-disable-next-line
    }, []);
};
