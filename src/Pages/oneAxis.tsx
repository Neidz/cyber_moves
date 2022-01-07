import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Test from "../jsxModels/test";
import { toRadian } from "../utils/toRadian";
import { ControlPanel } from "../components/controlPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const OneAxis = () => {
    const input1 = useSelector((state: RootState) => state.controlPanel.controlPanelInputs.input1);

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        {/* rotation takes angles in radians in form of list [x,z,y] */}
                        <Test rotation={[0, toRadian(input1), 0]} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
        </div>
    );
};
