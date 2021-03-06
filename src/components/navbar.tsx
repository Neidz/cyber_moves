import "../styles/sections/navbar.scss";
import { ReactComponent as OneAxisIcon } from "../assets/icons/oneAxisIcon.svg";
import { ReactComponent as MultipleAxisIcon } from "../assets/icons/multipleAxisIcon.svg";
import { ReactComponent as RobotArm3dof } from "../assets/icons/robotArm3dof.svg";
import { ReactComponent as RobotArm4dof } from "../assets/icons/robotArm4dof.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home-solid.svg";
import { ReactComponent as HexapodIcon } from "../assets/icons/hexapodIcon.svg";
import { NavigateFunction, useNavigate } from "react-router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserWindow } from "./userWindow";

export const Navbar = () => {
    const navigate: NavigateFunction = useNavigate();
    useLocalStorage();

    return (
        <div className="navbar">
            <HomeIcon onClick={() => navigate("/")} />
            <OneAxisIcon onClick={() => navigate("/oneAxis")} />
            <MultipleAxisIcon onClick={() => navigate("/multipleAxis")} />
            <RobotArm3dof onClick={() => navigate("/robotArm3dof")} />
            <RobotArm4dof onClick={() => navigate("/robotArm4dof")} />
            <HexapodIcon onClick={() => navigate("/hexapodRobot")} />
            <UserWindow />
        </div>
    );
};
