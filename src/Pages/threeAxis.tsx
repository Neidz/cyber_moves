import { ControlPanel } from "../components/controlPanel";

export const ThreeAxis = () => {
    return (
        <div className="threeAxis">
            <div className="mainRender"></div>
            <ControlPanel amountOfAxis={3} />
        </div>
    );
};
