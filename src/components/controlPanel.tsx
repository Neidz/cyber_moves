import { useState } from "react";
import { arrayFromNumber } from "../utils/arrayFromNumbe";

interface controlPanelProps {
    amountOfAxis: number | "multiple";
}

export const ControlPanel = (props: controlPanelProps) => {
    const [amountofAxis] = useState<number>(typeof props.amountOfAxis === "number" ? props.amountOfAxis : 6);

    return (
        <div className="controlPanel">
            {arrayFromNumber(amountofAxis).map((key: number) => {
                return (
                    <div className={`axisInputNumber${key}`} key={key}>
                        <input type="text" />
                    </div>
                );
            })}
        </div>
    );
};
