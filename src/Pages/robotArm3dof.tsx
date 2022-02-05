import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { OnScreenArrows } from "../components/onScreenArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useArrows } from "../hooks/useArrows";
import { useCleanUp } from "../hooks/useCleanUp";
import { Plane } from "../3dComponents/plane";
import { RobotArm } from "../3dComponents/robotArm";
import { RootState } from "../store/store";

// the same model as RobotArm3dof but last arm is cut and model reused
export const RobotArm3dof = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const renderVisuals = useSelector((state: RootState) => state.renderVisuals);
    const { planeColor } = renderVisuals;
    const keyControl = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed, showButtons } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(3);
    useCleanUp();

    return (
        <div className="mainContainer">
            <div className="mainRender">
                <Canvas camera={{ position: [45, 45, 20] }}>
                    <OrbitControls />
                    {/* states have to be passed through props because they can't be selected inside component in canvas */}
                    <Suspense fallback={null}>
                        <RobotArm
                            angles={angles}
                            renderVisuals={renderVisuals}
                            keyControl={keyControl}
                            changeTarget={changeTarget}
                            animationSpeed={animationSpeed}
                        />
                        <Plane planeColor={planeColor} />
                    </Suspense>
                </Canvas>
            </div>
            <RenderMenu />
            {showButtons && <OnScreenArrows />}
        </div>
    );
};
