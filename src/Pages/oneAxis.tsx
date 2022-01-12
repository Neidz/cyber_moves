import "../styles/sections/axisPages.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { ControlPanel } from "../components/controlPanel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { Lamp } from "../modelFiles/lamp";
import { Plane } from "../modelFiles/plane";
import { moveWithArrows } from "../utils/renderMovement/moveWithArrows";

export const OneAxis = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const angle1 = angles.angle1;
    const referenceColor1 = useSelector((state: RootState) => state.renderVisuals.referenceColors.referenceColor1);
    const baseColor = useSelector((state: RootState) => state.renderVisuals.baseColor);
    const activeColor = useSelector((state: RootState) => state.renderVisuals.activeColor);
    const planeColor = useSelector((state: RootState) => state.renderVisuals.planeColor);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const keyControl = useSelector((state: RootState) => state.keyControl);
    const dispatch = useDispatch();

    return (
        <div className="oneAxis">
            <div className="mainRender">
                <Canvas onClick={() => "x"}>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <SimpleAxis
                            targetAngle={angle1}
                            referenceColor={referenceColor1}
                            baseColor={isActive && whichActive === 1 ? activeColor : baseColor}
                            onClick={() => moveWithArrows(1, keyControl, angles, dispatch)}
                        />
                        <Lamp position={[2, 0, 2]} lightColor={referenceColor1} baseColor={baseColor} />
                        <Plane position={[0, -3, 0]} planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={1} />
        </div>
    );
};
