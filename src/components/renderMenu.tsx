import "../styles/sections/renderMenu.scss";
import { ControlPanel } from "./controlPanel";
import { ControlTips } from "./controlTips";

interface renderMenuProps {
    amountOfAxis: number;
}

export const RenderMenu = (props: renderMenuProps) => {
    return (
        <div className="renderMenu">
            <ControlPanel amountOfAxis={props.amountOfAxis} />
            <ControlTips />
        </div>
    );
};
