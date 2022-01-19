import { useDispatch } from "react-redux";
import { changeTab, currentTab } from "../store/features/renderMenuSlice";
import "../styles/sections/menuTabs.scss";

export const MenuTabs = () => {
    const tabs: currentTab[] = ["inputs", "commands", "options", "visuals"];
    const dispatch = useDispatch();
    const handleTabChange = (tab: currentTab) => {
        dispatch(changeTab(tab));
    };

    return (
        <ul className="menuTabs">
            {tabs.map((tab: currentTab) => {
                return <li onClick={() => handleTabChange(tab)}>{tab}</li>;
            })}
        </ul>
    );
};
