import { useDispatch, useSelector } from "react-redux";
import { changeAngles } from "../store/features/anglesSlice";
import { commandState } from "../store/features/commandsSlice";
import { RootState } from "../store/store";
import { arrayFromNumber } from "../utils/arrayFromNumber";

// executes series of commands created by user
export const useCommand = () => {
    const { commands } = useSelector((state: RootState) => state.commands);
    const { amountOfAxis } = useSelector((state: RootState) => state.renderMenu);
    const { animationSpeed } = useSelector((state: RootState) => state.options);
    const dispatch = useDispatch();

    const executeCommands = () => {
        // maps through commands
        commands.forEach((command: commandState, index) =>
            // all commands are executed "at once" but with different timeouts and that creates
            // series of commands being executed one after another
            // I know, it's confusing
            setTimeout(() => {
                // maps through each command element
                arrayFromNumber(amountOfAxis).forEach((axisNumber: number) => {
                    // for every axis/angle in command state is changed
                    const newAngle = command[`angle${axisNumber}` as keyof commandState];
                    if (typeof newAngle === "number") {
                        dispatch(changeAngles([axisNumber, newAngle]));
                    }
                });
            }, animationSpeed * index)
        );
    };
    return executeCommands;
};
