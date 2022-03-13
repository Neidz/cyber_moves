import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userNamesByType } from "../api/private/userNamesByType";
import { allNamesByType } from "../api/public/allNamesByType";
import { commandByName } from "../api/public/commandByName";
import { RootState } from "../store/store";
import "../styles/sections/browseCommandsTab.scss";

interface listOfNamesEntry {
    name: string;
}

export const BrowseCommandsTab = () => {
    const { robotType } = useSelector((state: RootState) => state.commands);
    const [listOfNames, setListOfNames] = useState<listOfNamesEntry[]>([]);
    const [userCommands, setUserCommands] = useState<boolean>(true);

    const fetchNames = async () => {
        const data = userCommands ? userNamesByType(robotType) : allNamesByType(robotType);
        data && setListOfNames(await data);
    };

    const loadCommand = async (name: string) => {
        const data = commandByName(name);
        if ((await data) !== undefined) {
            console.log(data);
        }
    };

    useEffect(() => {
        fetchNames();
        // eslint-disable-next-line
    }, [userCommands]);

    return (
        <div className="browseCommandsTab">
            <h2>List of available commands</h2>
            <button onClick={() => setUserCommands(!userCommands)}>
                {userCommands ? "show community commands" : "show my commands"}
            </button>
            {listOfNames &&
                listOfNames.map((entry, key) => {
                    return (
                        <h4 key={key} onClick={() => loadCommand(entry.name)}>
                            {entry.name}
                        </h4>
                    );
                })}
        </div>
    );
};
