import { OneAxis } from "./components/oneAxis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/fonts.scss";
import "./styles/variables.scss";
import { Navbar } from "./components/navbar";
import { Mainpage } from "./components/mainpage";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/oneAxis" element={<OneAxis />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
