import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
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
    useAmountOfAxis(3);

    return (
        <div className="mainContainer">
            <div className="mainRender">
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
            <RenderMenu />
        </div>
    );
};
