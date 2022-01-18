import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "../styles/sections/renderMenu.scss";
import { AngleInputs } from "./angleInputs";
import { ControlTips } from "./controlTips";
import { MenuTabs } from "./menuTabs";
import { ShowMenu } from "./showMenu";

export const RenderMenu = () => {
    const hidden = useSelector((state: RootState) => state.renderMenu.hidden);

    if (hidden) {
        return <ShowMenu />;
    } else {
        return (
            <div className="renderMenu">
                <ShowMenu />
                <MenuTabs />
                <AngleInputs />
                <ControlTips />
            </div>
        );
    }
};
