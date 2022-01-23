import "../styles/sections/visualsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ReferenceColorPicker } from "./referenceColorPicker";

export const VisualsTab = () => {
    const { referenceColors } = useSelector((state: RootState) => state.renderVisuals);
    const { angles } = useSelector((state: RootState) => state);

    return (
        <div className="visualsTab">
            <form className="referenceColors">
                {Object.keys(angles).map((angle: string, key) => {
                    return <ReferenceColorPicker key={key} angle={angle} />;
                })}
            </form>
        </div>
    );
};
