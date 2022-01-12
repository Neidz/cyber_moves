import { toRadian } from "../toRadian";

// used with useFrame rotates object from current angle to targetAngle by
// amount of degrees specified in speed variable per second
export const smoothRotation = (ref: any, targetAngle: number, speed: number = 2, axis: string = "y") => {
    if (ref.current) {
        if (ref.current.rotation[axis] < toRadian(targetAngle) - toRadian(speed)) {
            ref.current.rotation[axis] += toRadian(speed);
        } else if (ref.current.rotation[axis] > toRadian(targetAngle) + toRadian(speed)) {
            ref.current.rotation[axis] -= toRadian(speed);
        }
    }
};
