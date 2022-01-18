import "../styles/sections/menuTabs.scss";

export const MenuTabs = () => {
    const tabs = ["inputs", "commands", "visuals"];

    return (
        <ul className="menuTabs">
            {tabs.map((tab: string) => {
                return <li className={`${tab}Tab`}>{tab}</li>;
            })}
        </ul>
    );
};
