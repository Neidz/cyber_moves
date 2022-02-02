import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MainpageScene } from "../modelFiles/mainpageScene";
import "../styles/sections/mainpage.scss";

export const Mainpage = () => {
    return (
        <div className="mainpage">
            <div className="mainContainer">
                <div className="mainRender">
                    <Canvas shadows>
                        <ambientLight intensity={0.7} />
                        <OrbitControls />
                        <Suspense fallback={null}>
                            <MainpageScene />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};
