import "../styles/sections/showMenu.scss";
import { ReactComponent as TriangleRight } from "../assets/icons/triangleRight.svg";

interface showMenuProps {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
    hidden: boolean;
}

export const ShowMenu = (props: showMenuProps) => {
    if (props.hidden) {
        return (
            <div className="showMenuSpacer">
                <div className="showMenu">
                    <TriangleRight id="triangleRight" onClick={() => props.setHidden(!props.hidden)} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="showMenu">
                <TriangleRight id="triangleRight" onClick={() => props.setHidden(!props.hidden)} />
            </div>
        );
    }
};
