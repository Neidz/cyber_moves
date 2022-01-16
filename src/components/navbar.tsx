import "../styles/sections/navbar.scss";
import { ReactComponent as OneAxisIcon } from "../assets/oneAxisIcon.svg";
import { ReactComponent as TwoAxisIcon } from "../assets/twoAxisIcon.svg";
import { ReactComponent as ThreeAxisIcon } from "../assets/threeAxisIcon.svg";
import { ReactComponent as MultipleAxisIcon } from "../assets/multipleAxisIcon.svg";
import { ReactComponent as RobotArm3dof } from "../assets/robotArm3dof.svg";
import { ReactComponent as HomeIcon } from "../assets/home-solid.svg";
import { NavigateFunction, useNavigate } from "react-router";

export const Navbar = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="navbar">
            <HomeIcon onClick={() => navigate("/")} />
            <OneAxisIcon onClick={() => navigate("/oneAxis")} />
            <MultipleAxisIcon onClick={() => navigate("/multipleAxis")} />
            <RobotArm3dof onClick={() => navigate("/robotArm3dof")} />
        </div>
    );
};
