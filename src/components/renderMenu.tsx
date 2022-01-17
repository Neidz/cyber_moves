import { useState } from "react";
import "../styles/sections/renderMenu.scss";
import { ControlPanel } from "./controlPanel";
import { ControlTips } from "./controlTips";
import { ShowMenu } from "./showMenu";

interface renderMenuProps {
    amountOfAxis: number;
}

export const RenderMenu = (props: renderMenuProps) => {
    const [hidden, setHidden] = useState<boolean>(true);

    if (hidden) {
        return <ShowMenu setHidden={setHidden} hidden={hidden} />;
    } else {
        return (
            <div className="renderMenu">
                <ShowMenu setHidden={setHidden} hidden={hidden} />
                <ControlPanel amountOfAxis={props.amountOfAxis} />
                <ControlTips />
            </div>
        );
    }
};
