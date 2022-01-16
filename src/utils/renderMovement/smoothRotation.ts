import { toAngle } from "../toAngle";
import { toRadian } from "../toRadian";

// used with useFrame rotates object from current angle to targetAngle by
// amount of degrees specified in speed variable per second
export const smoothRotation = (ref: any, targetAngle: number, axis: string = "y", speed: number = 1) => {
    if (ref.current) {
        if (Math.round(toAngle(ref.current.rotation[axis])) < targetAngle) {
            ref.current.rotation[axis] += toRadian(speed);
        } else if (Math.round(toAngle(ref.current.rotation[axis])) > targetAngle) {
            ref.current.rotation[axis] -= toRadian(speed);
        }
    }
};
