import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { toRadian } from "../utils/toRadian";
import { ControlPanel } from "../components/controlPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../modelFiles/simpleAxis";

export const OneAxis = () => {
    const angle1 = useSelector((state: RootState) => state.angles.angle1);

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        {/* rotation takes angles in radians in form of list [x,z,y] */}
                        <SimpleAxis rotation={[0, toRadian(angle1), 0]} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
        </div>
    );
};
