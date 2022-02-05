export type deviceSizeType = "small" | "medium" | "big";

export const detectDeviceSize = () => {
    if (window.innerWidth < 700) {
        return "small";
    } else if (window.innerWidth < 1200) {
        return "medium";
    } else {
        return "big";
    }
};
