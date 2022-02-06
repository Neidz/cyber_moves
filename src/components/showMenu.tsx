import "../styles/sections/showMenu.scss";
import { ReactComponent as TriangleRight } from "../assets/icons/triangleRight.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeHidden } from "../store/features/renderMenuSlice";

export const ShowMenu = () => {
    const hidden = useSelector((state: RootState) => state.renderMenu.hidden);
    const dispatch = useDispatch();

    if (hidden) {
        return (
            <div className="showMenuSpacer">
                <div
                    className="showMenu"
                    style={{ transform: "scale(1.2)" }}
                    onClick={() => dispatch(changeHidden(!hidden))}
                >
                    <TriangleRight id="triangleRight" style={{ transform: "rotate(180deg)" }} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="showMenu" onClick={() => dispatch(changeHidden(!hidden))}>
                <TriangleRight id="triangleRight" />
            </div>
        );
    }
};
