import "../styles/sections/visualsTab.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ReferenceColorPicker } from "./colorPickers/referenceColorPicker";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { PlaneColorPicker } from "./colorPickers/planeColorPicker";
import { ActiveColorPicker } from "./colorPickers/activeColorPicker";
import { BaseColorPicker } from "./colorPickers/baseColorPicker";
import { useEffect } from "react";
import { updateStorage } from "../utils/updateStorage";

export const VisualsTab = () => {
    const { amountOfAxis } = useSelector((state: RootState) => state.renderMenu);
    const { referenceColors } = useSelector((state: RootState) => state.renderVisuals);

    useEffect(() => {
        updateStorage("referenceColors", referenceColors);
    }, [referenceColors]);

    return (
        <div className="visualsTab">
            <h2>Click on element's name to change color of that element</h2>
            <h3>list of current axes</h3>
            <div className="referenceColors">
                {arrayFromNumber(amountOfAxis).map((angleNumber: number, key) => {
                    return <ReferenceColorPicker key={key} angleNumber={angleNumber} />;
                })}
            </div>
            <h3>other elements</h3>
            <div className="otherElements">
                <PlaneColorPicker />
                <ActiveColorPicker />
                <BaseColorPicker />
            </div>
        </div>
    );
};
