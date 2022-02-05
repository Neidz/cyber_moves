// calculates layout of elements depending on amount of them
// this is meant to be used when generating 3d elements by maping array returned from /arrayFromNumber.ts
// returns position in form of vector(x, z, y)
// axis and lamp is generated in different place
import { Vector3 } from "three";

export const calculateLayout = (amount: number, elementIndex: number, which: "lamp" | "axis", spacing: number = 5) => {
    if (which === "axis") {
        if (elementIndex < 4) {
            return new Vector3(-spacing + elementIndex * spacing, 0, 0);
        } else if (elementIndex > 3 && elementIndex < 7) {
            return new Vector3(-spacing + elementIndex * spacing - 3 * spacing, 0, -spacing);
        } else if (elementIndex > 6 && elementIndex < 10) {
            return new Vector3(-spacing + elementIndex * spacing - 6 * spacing, 0, -spacing * 2);
        } else {
            return new Vector3(-spacing + elementIndex * spacing - 9 * spacing, 0, -spacing * 3);
        }
    } else {
        return new Vector3(-amount / 2 + elementIndex * spacing, 0, 4);
    }
};
