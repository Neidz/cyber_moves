import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLimitsOn } from "../store/features/optionsSlice";
import { RootState } from "../store/store";
import "../styles/sections/limitsTab.scss";
import { arrayFromNumber } from "../utils/arrayFromNumber";
import { updateStorage } from "../utils/updateStorage";
import { LimitInput } from "./limitInput";

export const LimitsTab = () => {
    const amountOfAxis = useSelector((state: RootState) => state.renderMenu.amountOfAxis);
    const { limitsOn } = useSelector((state: RootState) => state.options);
    const dispatch = useDispatch();

    useEffect(() => {
        updateStorage("limitsOn", limitsOn);
    }, [limitsOn]);

    return (
        <div className="limitsTab">
            <h2>Enter limits for choosen axis</h2>
            {arrayFromNumber(amountOfAxis).map((key: number, inputNumber: number) => {
                return (
                    <div className="limitPair" key={key}>
                        <LimitInput inputNumber={inputNumber + 1} limit={"min"} />
                        <LimitInput inputNumber={inputNumber + 1} limit={"max"} />
                    </div>
                );
            })}
            <div className="limitsTabButtons">
                <button onClick={() => dispatch(changeLimitsOn(!limitsOn))}>
                    {limitsOn ? "turn limits off" : "turn limits on"}
                </button>
            </div>
        </div>
    );
};
