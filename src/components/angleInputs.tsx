import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "../styles/sections/angleInputs.scss";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { AngleInput } from "./angleInput";

export const AngleInputs = () => {
    const amountOfAxis = useSelector((state: RootState) => state.renderMenu.amountOfAxis);

    return (
        <div className="angleInputs">
            {arrayFromNumber(amountOfAxis).map((key: number, inputNumber: number) => {
                return <AngleInput key={key} inputNumber={inputNumber + 1} />;
            })}
        </div>
    );
};
