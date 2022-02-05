import { useEffect } from "react";

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
