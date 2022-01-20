import { useDispatch, useSelector } from "react-redux";
import { newCommand, removeLastCommand } from "../store/features/commandsSlice";
import { RootState } from "../store/store";
import "../styles/sections/angleInputsTab.scss";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { AngleInput } from "./angleInput";

export const AngleInputsTab = () => {
    const amountOfAxis = useSelector((state: RootState) => state.renderMenu.amountOfAxis);
    const angles = useSelector((state: RootState) => state.angles);
    const dispatch = useDispatch();

    return (
        <div className="angleInputsTab">
            {arrayFromNumber(amountOfAxis).map((key: number, inputNumber: number) => {
                return <AngleInput key={key} inputNumber={inputNumber + 1} />;
            })}
            <div className="angleInputsTabButtons">
                <button onClick={() => dispatch(newCommand(angles))}>add command</button>
                <button onClick={() => dispatch(removeLastCommand())}>remove last command</button>
            </div>
        </div>
    );
};
