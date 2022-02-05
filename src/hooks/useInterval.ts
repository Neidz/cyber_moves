import { useEffect } from "react";

// repeats if interval is provided, otherwise stops
export const useInterval = (callback: () => void, interval: number | null) => {
    useEffect(() => {
        if (interval) {
            const i = window.setInterval(callback, interval);

            return () => {
                window.clearInterval(i);
            };
        }
    }, [callback, interval]);
};
