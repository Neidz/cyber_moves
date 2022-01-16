import { OneAxis } from "./Pages/oneAxis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import { Navbar } from "./components/navbar";
import { Mainpage } from "./Pages/mainpage";
import { TwoAxis } from "./Pages/twoAxis";
import { ThreeAxis } from "./Pages/threeAxis";
import { MultipleAxis } from "./Pages/multipleAxis";
import { RobotArm3dof } from "./Pages/robotArm3dof";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/oneAxis" element={<OneAxis />} />
                    <Route path="/twoAxis" element={<TwoAxis />} />
                    <Route path="/threeAxis" element={<ThreeAxis />} />
                    <Route path="/multipleAxis" element={<MultipleAxis />} />
                    <Route path="/robotArm3dof" element={<RobotArm3dof />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
