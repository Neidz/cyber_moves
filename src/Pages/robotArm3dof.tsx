import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { ControlPanel } from "../components/controlPanel";
import { useArrows } from "../hooks/useArrows";
import { AxisConnector } from "../modelFiles/axisConnector";
import { AxisConnectorCapped } from "../modelFiles/axisConnectorCapped";
import { Plane } from "../modelFiles/plane";
import { SimpleAxis } from "../modelFiles/simpleAxis";
import { RootState } from "../store/store";
import { toRadian, toRadianList } from "../utils/toRadian";

export const RobotArm3dof = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const { referenceColors, baseColor, activeColor, planeColor } = useSelector((state: RootState) => state.renderVisuals);
    const { isActive, whichActive } = useSelector((state: RootState) => state.keyControl);
    const changeTarget = useArrows();

    return (
        <div className="robotArm3dof">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        {/* base */}
                        <SimpleAxis
                            referenceColor={referenceColors.referenceColor1}
                            baseColor={isActive && whichActive === 1 ? activeColor : baseColor}
                            targetAngle={angles.angle1}
                            onClick={() => changeTarget(1)}
                        />
                        <group rotation={[0, toRadian(angles.angle1), toRadian(90)]}>
                            <SimpleAxis
                                rotation={toRadianList([90, 0, 0])}
                                referenceColor={referenceColors.referenceColor2}
                                baseColor={isActive && whichActive === 2 ? activeColor : baseColor}
                                targetAngle={angles.angle2}
                                onClick={() => changeTarget(2)}
                                position={[5, 0, 0]}
                            />
                            <AxisConnector
                                rotation={toRadianList([90, 0, 0])}
                                position={[5, 0, 0]}
                                baseColor={baseColor}
                                targetAngle={angles.angle2}
                            />
                            <group rotation={[0, 0, toRadian(90 + angles.angle2)]}>
                                <SimpleAxis
                                    rotation={toRadianList([90, 0, 0])}
                                    referenceColor={referenceColors.referenceColor2}
                                    baseColor={isActive && whichActive === 3 ? activeColor : baseColor}
                                    targetAngle={angles.angle3}
                                    onClick={() => changeTarget(3)}
                                    position={[0, -17, 0]}
                                />
                                <AxisConnectorCapped
                                    rotation={toRadianList([90, 0, 0])}
                                    position={[0, -17, 0]}
                                    baseColor={baseColor}
                                    targetAngle={angles.angle3}
                                />
                            </group>
                        </group>
                    </Suspense>
                    <Plane position={[0, -3, 0]} planeColor={planeColor} />
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={3} />
        </div>
    );
};
