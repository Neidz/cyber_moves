import { ControlPanel } from "../components/controlPanel";

export const TwoAxis = () => {
    return (
        <div className="twoAxis">
            <div className="mainRender"></div>
            <ControlPanel amountOfAxis={2} />
        </div>
    );
};
