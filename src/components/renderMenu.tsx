import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "../styles/sections/renderMenu.scss";
import { AngleInputsTab } from "./angleInputsTab";
import { CommandsTab } from "./commandsTab";
import { HowItWorksTab } from "./howItWorksTab";
import { MenuTabs } from "./menuTabs";
import { OptionsTab } from "./optionsTab";
import { ShowMenu } from "./showMenu";
import { VisualsTab } from "./visualsTab";

export const RenderMenu = () => {
    const { hidden, currentTab } = useSelector((state: RootState) => state.renderMenu);

    if (hidden) {
        return <ShowMenu />;
    } else {
        return (
            <div className="renderMenu">
                <ShowMenu />
                <MenuTabs />
                {currentTab === "angles" && <AngleInputsTab />}
                {currentTab === "commands" && <CommandsTab />}
                {currentTab === "options" && <OptionsTab />}
                {currentTab === "visuals" && <VisualsTab />}
                {currentTab === "how it works" && <HowItWorksTab />}
            </div>
        );
    }
};
