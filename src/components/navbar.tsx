import "../styles/sections/navbar.scss";
import { ReactComponent as OneAxisIcon } from "../assets/oneAxisIcon.svg";
import { ReactComponent as TwoAxisIcon } from "../assets/twoAxisIcon.svg";
import { ReactComponent as ThreeAxisIcon } from "../assets/threeAxisIcon.svg";
import { ReactComponent as HomeIcon } from "../assets/home-solid.svg";
import { NavigateFunction, useNavigate } from "react-router";

export const Navbar = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="navbar">
            <HomeIcon onClick={() => navigate("/")} />
            <OneAxisIcon onClick={() => navigate("/oneAxis")} />
            <TwoAxisIcon onClick={() => navigate("/twoAxis")} />
            <ThreeAxisIcon onClick={() => navigate("/threeAxis")} />
        </div>
    );
};
