import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { toRadian } from "../utils/toRadian";
import { ControlPanel } from "../components/controlPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { Lamp } from "../modelFiles/lamp";
import { Plane } from "../modelFiles/plane";

export const OneAxis = () => {
    const angle1 = useSelector((state: RootState) => state.angles.angle1);
    const referenceColor1 = useSelector((state: RootState) => state.renderVisuals.referenceColors.referenceColor1);
    const baseColor = useSelector((state: RootState) => state.renderVisuals.baseColor);
    const planeColor = useSelector((state: RootState) => state.renderVisuals.planeColor);

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <SimpleAxis targetAngle={angle1} referenceColor={referenceColor1} baseColor={baseColor} />
                        <Lamp position={[2, 0, 2]} lightColor={referenceColor1} baseColor={baseColor} />
                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
        </div>
    );
};
