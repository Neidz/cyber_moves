import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnScreenArrows } from "../components/onScreenArrows";
import { RenderMenu } from "../components/renderMenu";
import { useAmountOfAxis } from "../hooks/useAmountOfAxis";
import { useArrows } from "../hooks/useArrows";
import { useCleanUp } from "../hooks/useCleanUp";
import { Plane } from "../3dComponents/plane";
import { RobotArm } from "../3dComponents/robotArm";
import { RootState } from "../store/store";
import { editCommandRobotType } from "../store/features/commandsSlice";

export const RobotArm4dof = () => {
    const angles = useSelector((state: RootState) => state.angles);
    const renderVisuals = useSelector((state: RootState) => state.renderVisuals);
    const { planeColor } = renderVisuals;
    const keyControl = useSelector((state: RootState) => state.keyControl);
    const { animationSpeed, showButtons } = useSelector((state: RootState) => state.options);
    const changeTarget = useArrows();
    useAmountOfAxis(4);
    useCleanUp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editCommandRobotType("robotArm4dof"));
        // eslint-disable-next-line
    }, []);

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
                            dof={4}
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
