import "../styles/sections/commandsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { referenceColorsState } from "../store/features/renderVisualsSlice";
import { useCommand } from "../hooks/useCommand";

export const CommandsTab = () => {
    const commands = useSelector((state: RootState) => state.commands.commands);
    const referenceColors = useSelector((state: RootState) => state.renderVisuals.referenceColors);
    const executeCommand = useCommand();

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
        </div>
    );
};
