import "../styles/sections/commandsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { referenceColorsState } from "../store/features/renderVisualsSlice";

export const CommandsTab = () => {
    const commands = useSelector((state: RootState) => state.commands.commands);
    const referenceColors = useSelector((state: RootState) => state.renderVisuals.referenceColors);

    return (
        <div className="commandsTab">
            <h3>List of commands submited through inputs tab</h3>
            <div className="commandList">
                {commands.map((object: object, key: number) => (
                    <div className="highlightedCommand" key={key}>
                        <h4 className="commandNumber">{`command${key + 1}:`}</h4>
                        {Object.keys(object).map((key: string) => (
                            <div className="singleAngle" key={key}>
                                <h4
                                    className="highlightedAngle"
                                    style={{
                                        color: referenceColors[
                                            `referenceColor${key.replace("angle", "")}` as keyof referenceColorsState
                                        ],
                                    }}
                                >{`${key}:`}</h4>
                                <h4 className="highlightedValue"> {`${object[key as keyof object]}, `}</h4>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
