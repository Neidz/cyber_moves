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
                </Routes>
            </Router>
        </div>
    );
};

export default App;
