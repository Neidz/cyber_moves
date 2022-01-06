import { ControlPanel } from "../components/controlPanel";

export const MultipleAxis = () => {
    return (
        <div className="multipleAxis">
            <div className="mainRender"></div>
            <ControlPanel amountOfAxis={"multiple"} />
        </div>
    );
};
