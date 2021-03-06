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
    const { username } = useSelector((state: RootState) => state.user);
    const [listOfNames, setListOfNames] = useState<listOfNamesEntry[]>([]);
    const [userCommands, setUserCommands] = useState<boolean>(false);
    const dispatch = useDispatch();

    const fetchNames = async () => {
        const data = userCommands ? await userNamesByType(robotType) : await allNamesByType(robotType);
        data && setListOfNames(data);
    };

    const loadCommand = async (name: string) => {
        const data = await commandByName(name);
        if (data) {
            data.commands && dispatch(loadCommands(data.commands));
        }
    };

    useEffect(() => {
        fetchNames();
        // eslint-disable-next-line
    }, [userCommands]);

    return (
        <div className="browseCommandsTab">
            <h2>List of available commands</h2>
            {username && (
                <button onClick={() => setUserCommands(!userCommands)}>
                    {userCommands ? "show community commands" : "show my commands"}
                </button>
            )}
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
