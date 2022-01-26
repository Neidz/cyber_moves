import "../styles/sections/visualsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ReferenceColorPicker } from "./colorPickers/referenceColorPicker";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { PlaneColorPicker } from "./colorPickers/planeColorPicker";
import { ActiveColorPicker } from "./colorPickers/activeColorPicker";
import { BaseColorPicker } from "./colorPickers/baseColorPicker";

export const VisualsTab = () => {
    const { amountOfAxis } = useSelector((state: RootState) => state.renderMenu);

    return (
        <div className="visualsTab">
            <h3>Click on element's name to change color of that element</h3>
            <h4>list of current axes</h4>
            <div className="referenceColors">
                {arrayFromNumber(amountOfAxis).map((angleNumber: number, key) => {
                    return <ReferenceColorPicker key={key} angleNumber={angleNumber} />;
                })}
            </div>
            <h4>other elements</h4>
            <div className="otherElements">
                <PlaneColorPicker />
                <ActiveColorPicker />
                <BaseColorPicker />
            </div>
        </div>
    );
};
