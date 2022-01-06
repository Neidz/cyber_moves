import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Test from "../jsxModels/test";
import { toRadianList } from "../utils/toRadian";
import { ControlPanel } from "../components/controlPanel";

export const OneAxis = () => {
    const [angles, setAngles] = useState<number[]>(toRadianList([0, 0, 0]));

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        {/* rotation takes angles in radians in form of list [x,z,y] */}
                        <Test rotation={toRadianList(angles)} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
            <h4>{`x = ${angles[0]}`}</h4>
            <button className="tempDiv" onClick={() => setAngles([angles[0] + 45, angles[1], angles[2]])}></button>
            <h4>{`z = ${angles[1]}`}</h4>
            <button className="tempDiv" onClick={() => setAngles([angles[0], angles[1] + 45, angles[2]])}></button>
            <h4>{`y = ${angles[2]}`}</h4>
            <button className="tempDiv" onClick={() => setAngles([angles[0], angles[1], angles[2] + 45])}></button>
        </div>
    );
};
