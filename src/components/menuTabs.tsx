import { useDispatch } from "react-redux";
import { changeTab, currentTab } from "../store/features/renderMenuSlice";
import "../styles/sections/menuTabs.scss";

export const MenuTabs = () => {
    const tabs: currentTab[] = ["angles", "limits", "commands", "browse commands", "options", "visuals", "how it works"];
    const dispatch = useDispatch();
    const handleTabChange = (tab: currentTab) => {
        dispatch(changeTab(tab));
    };

    return (
        <ul className="menuTabs">
            {tabs.map((tab: currentTab, key: number) => {
                return (
                    <li key={key} onClick={() => handleTabChange(tab)}>
                        {tab}
                    </li>
                );
            })}
        </ul>
    );
};
