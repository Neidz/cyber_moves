import "./styles/app.scss";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import "./styles/sections/mainContainer.scss";
import { OneAxis } from "./Pages/oneAxis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Mainpage } from "./Pages/mainpage";
import { MultipleAxis } from "./Pages/multipleAxis";
import { RobotArm4dof } from "./Pages/robotArm4dof";
import { RobotArm3dof } from "./Pages/robotArm3dof";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/oneAxis" element={<OneAxis />} />
                    <Route path="/multipleAxis" element={<MultipleAxis />} />
                    <Route path="/robotArm3dof" element={<RobotArm3dof />} />
                    <Route path="/robotArm4dof" element={<RobotArm4dof />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
