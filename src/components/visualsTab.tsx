import "../styles/sections/visualsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ReferenceColorPicker } from "./referenceColorPicker";
import { arrayFromNumber } from "../utils/arrayFromNumber";

export const VisualsTab = () => {
    const { amountOfAxis } = useSelector((state: RootState) => state.renderMenu);

    return (
        <div className="visualsTab">
            <h3>Click on element to change color of that axis</h3>
            <div className="referenceColors">
                {arrayFromNumber(amountOfAxis).map((angleNumber: number, key) => {
                    return <ReferenceColorPicker key={key} angleNumber={angleNumber} />;
                })}
            </div>
        </div>
    );
};
