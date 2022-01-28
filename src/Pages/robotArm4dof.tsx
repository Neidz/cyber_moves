import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { OnScreenArrows } from "../components/onScreenArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useArrows } from "../hooks/useArrows";
import { useCleanUp } from "../hooks/useCleanUp";
import { Plane } from "../modelFiles/plane";
import { RobotArm } from "../modelFiles/robots/robotArm";
import { RootState } from "../store/store";

export const RobotArm4dof = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const renderVisuals = useSelector((state: RootState) => state.renderVisuals);
    const { planeColor } = renderVisuals;
    const keyControl = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(4);
    useCleanUp();

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas>
                    <axesHelper position={[1, 1, 1]} />
                    <OrbitControls />
                    {/* states have to be passed through props because they can't be selected inside component in canvas */}
                    <RobotArm
                        angles={angles}
                        renderVisuals={renderVisuals}
                        keyControl={keyControl}
                        changeTarget={changeTarget}
                        animationSpeed={animationSpeed}
                        dof={4}
                    />
                    <Plane
                        planeColor={planeColor}
                        angles={angles}
                        renderVisuals={renderVisuals}
                        keyControl={keyControl}
                        changeTarget={changeTarget}
                        animationSpeed={animationSpeed}
                    />
                </Canvas>
            </div>
            <RenderMenu />
            <OnScreenArrows />
        </div>
    );
};