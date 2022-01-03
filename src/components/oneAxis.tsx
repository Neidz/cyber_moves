import "../styles/sections/oneAxis.scss";
import { Canvas } from "@react-three/fiber";
import Model from "../jsxModels/oneAxis";
import { Suspense } from "react";

export const OneAxis = () => {
    return (
        <div className="oneAxis">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
};
