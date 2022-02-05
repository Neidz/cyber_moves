import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MainpageCamera } from "../3dComponents/mainpageCamera";
import { MainpageScene } from "../3dComponents/mainpageScene";
import "../styles/sections/mainpage.scss";

export const Mainpage = () => {
    return (
        <div className="mainpage">
            <div className="mainContainer">
                <div className="mainRender">
                    <Canvas>
                        <MainpageCamera />
                        <ambientLight intensity={0.7} />
                        <Suspense fallback={null}>
                            <MainpageScene />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};
