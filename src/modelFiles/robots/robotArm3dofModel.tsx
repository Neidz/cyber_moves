import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { anglesState } from "../../store/features/anglesSlice";
import { keyControlState } from "../../store/features/keyControlSlice";
import { renderVisualsState } from "../../store/features/renderVisualsSlice";
import { smoothRotation } from "../../utils/renderMovement/smoothRotation";
import { toRadianList } from "../../utils/toRadian";
import { AxisConnector } from "../axisConnector";
import { AxisConnectorCapped } from "../axisConnectorCapped";
import { SimpleAxis } from "../simpleAxis";

interface robotArm3dofModelProps {
    angles: anglesState;
    renderVisuals: renderVisualsState;
    keyControl: keyControlState;
    changeTarget: (target: number) => void;
}

export const RobotArm3dofModel = (props: robotArm3dofModelProps) => {
    const angles = props.angles;
    const { referenceColors, baseColor, activeColor } = props.renderVisuals;
    const { isActive, whichActive } = props.keyControl;

    const robot = useRef();
    const firstArm = useRef();

    useFrame(() => {
        smoothRotation(robot, angles.angle1);
    });
    useFrame(() => {
        smoothRotation(firstArm, angles.angle2, "z");
    });

    return (
        <Suspense fallback={null}>
            <group ref={robot}>
                {/* base */}
                <SimpleAxis
                    referenceColor={referenceColors.referenceColor1}
                    baseColor={isActive && whichActive === 1 ? activeColor : baseColor}
                    onClick={() => props.changeTarget(1)}
                />
                {/* first arm with nested second arm */}
                <group position={[0, 5, 0]} ref={firstArm}>
                    <SimpleAxis
                        rotation={toRadianList([90, 0, 0])}
                        referenceColor={referenceColors.referenceColor2}
                        baseColor={isActive && whichActive === 2 ? activeColor : baseColor}
                        onClick={() => props.changeTarget(2)}
                    />
                    <AxisConnector
                        rotation={toRadianList([90, 90, 0])}
                        baseColor={baseColor}
                        onClick={() => props.changeTarget(2)}
                    />
                    {/* second arm */}
                    <group>
                        <SimpleAxis
                            rotation={toRadianList([90, 0, 0])}
                            referenceColor={referenceColors.referenceColor3}
                            baseColor={isActive && whichActive === 3 ? activeColor : baseColor}
                            onClick={() => props.changeTarget(3)}
                            position={[0, 12, 0]}
                            targetAngle={angles.angle3}
                        />
                        <AxisConnectorCapped
                            rotation={toRadianList([90, 0, 0])}
                            baseColor={baseColor}
                            position={[0, 12, 0]}
                            targetAngle={angles.angle3}
                            onClick={() => props.changeTarget(3)}
                        />
                    </group>
                </group>
            </group>
        </Suspense>
    );
};
