import "../styles/sections/commandsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { referenceColorsState } from "../store/features/renderVisualsSlice";
import { useCommand } from "../hooks/useCommand";
import { ReactComponent as CopyIcon } from "../assets/icons/copyIcon.svg";
import { newCommand, newCommandData } from "../api/private/newCommand";
import { useState } from "react";

export const CommandsTab = () => {
    const [commandName, setCommandName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const { commands, robotType } = useSelector((state: RootState) => state.commands);
    const { username } = useSelector((state: RootState) => state.user);
    const referenceColors = useSelector((state: RootState) => state.renderVisuals.referenceColors);
    const executeCommand = useCommand();

    const saveCommand = async () => {
        setIsError(false);
        if (username !== "") {
            const data: newCommandData = {
                name: commandName,
                commands: commands,
                robotType: robotType,
                category: [],
            };
            const res = await newCommand(data);
            if (!res) {
                setIsError(true);
                setError("name already taken");
            }
        } else {
            setIsError(true);
            setError("you have to log in to save command");
        }
    };

    return (
        <div className="commandsTab">
            <h2>List of commands</h2>
            <button onClick={executeCommand}>execute commands</button>
            <ul className="commandList">
                {commands.map((object: object, key: number) => (
                    <li className="highlightedCommand" key={key}>
                        <h5 className="commandNumber">{`command${key + 1}:`}</h5>
                        {Object.keys(object).map((key: string) => (
                            <div className="singleAngle" key={key}>
                                <h5
                                    className="highlightedAngle"
                                    style={{
                                        color: referenceColors[
                                            `referenceColor${key.replace("angle", "")}` as keyof referenceColorsState
                                        ],
                                    }}
                                >{`${key}:`}</h5>
                                <h5 className="highlightedValue"> {`${object[key as keyof object]}, `}</h5>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
            <CopyIcon className="copyIcon" onClick={() => navigator.clipboard.writeText(JSON.stringify(commands))} />
            <div className="commandAdding">
                <input type="text" onChange={(e) => setCommandName(e.target.value)} value={commandName} />
                <button onClick={() => saveCommand()}>save command</button>
                {isError && <p className="error">{error}</p>}
            </div>
        </div>
    );
};
