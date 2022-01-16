import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { ControlPanel } from "../components/controlPanel";
import { ControlTips } from "../components/controlTips";
import { useArrows } from "../hooks/useArrows";
import { Plane } from "../modelFiles/plane";
import { RobotArm3dofModel } from "../modelFiles/robots/robotArm3dofModel";
import { RootState } from "../store/store";

export const RobotArm3dof = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const renderVisuals = useSelector((state: RootState) => state.renderVisuals);
    const { planeColor } = renderVisuals;
    const keyControl = useSelector((state: RootState) => state.keyControl);
    const changeTarget = useArrows();

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <ControlTips />
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    {/* states have to be passed through props because they can't be selected inside component in canvas */}
                    <RobotArm3dofModel
                        angles={angles}
                        renderVisuals={renderVisuals}
                        keyControl={keyControl}
                        changeTarget={changeTarget}
                    />
                    <Plane position={[0, -3, 0]} planeColor={planeColor} />
                </Canvas>
            </div>
            <ControlPanel amountOfAxis={3} />
        </div>
    );
};
