import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { ControlPanel } from "../components/controlPanel";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { Lamp } from "../modelFiles/lamp";
import { Plane } from "../modelFiles/plane";
import { useArrows } from "../hooks/useArrows";

export const OneAxis = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const renderVisuals = useSelector((state: RootState) => state.renderVisuals);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const changeTarget = useArrows();

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <SimpleAxis
                            targetAngle={angles.angle1}
                            referenceColor={renderVisuals.referenceColors.referenceColor1}
                            baseColor={isActive && whichActive === 1 ? renderVisuals.activeColor : renderVisuals.baseColor}
                            onClick={() => changeTarget(1)}
                        />
                        <Lamp
                            position={[2, 0, 2]}
                            lightColor={renderVisuals.referenceColors.referenceColor1}
                            baseColor={renderVisuals.baseColor}
                        />
                        <Plane position={[0, -3, 0]} planeColor={renderVisuals.planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
        </div>
    );
};
