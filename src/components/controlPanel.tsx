import "../styles/sections/controlPanel.scss";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { AngleInput } from "./angleInput";

interface controlPanelProps {
    amountOfAxis: number;
}

export const ControlPanel = (props: controlPanelProps) => {
    return (
        <div className="controlPanel">
            <div className="controlPanelInputs">
                {arrayFromNumber(props.amountOfAxis).map((key: number, inputNumber: number) => {
                    return <AngleInput key={key} inputNumber={inputNumber + 1} />;
                })}
            </div>
        </div>
    );
};
