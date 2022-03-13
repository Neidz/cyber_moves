import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userNamesByType } from "../api/private/userNamesByType";
import { allNamesByType } from "../api/public/allNamesByType";
import { commandByName } from "../api/public/commandByName";
import { loadCommands } from "../store/features/commandsSlice";
import { RootState } from "../store/store";
import "../styles/sections/browseCommandsTab.scss";

interface listOfNamesEntry {
    name: string;
}

export const BrowseCommandsTab = () => {
    const { robotType } = useSelector((state: RootState) => state.commands);
    const [listOfNames, setListOfNames] = useState<listOfNamesEntry[]>([]);
    const [userCommands, setUserCommands] = useState<boolean>(true);
    const dispatch = useDispatch();

    const fetchNames = async () => {
        const data = userCommands ? userNamesByType(robotType) : allNamesByType(robotType);
        (await data) && setListOfNames(await data);
    };

    const loadCommand = async (name: string) => {
        const data = commandByName(name);
        // every object in database has _id property and it has to filtered out
        if (data) {
            const listOfCommands = (await data).commands.map(({ _id, ...rest }) => rest);
            listOfCommands && dispatch(loadCommands(listOfCommands));
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
            <h3>click on command name to load it, it will appear in commands tab</h3>
            {listOfNames &&
                listOfNames.map((entry, key) => {
                    return (
                        <button key={key} onClick={() => loadCommand(entry.name)}>
                            {entry.name}
                        </button>
                    );
                })}
        </div>
    );
};
