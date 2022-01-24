import { useEffect, useLayoutEffect, useRef } from "react";

// repeats if delays is provided, otherwise stops
export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    // remember the latest callback if it changes.
    useLayoutEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // set up the interval.
    useEffect(() => {
        // don't schedule if no delay is specified.
        if (!delay && delay !== 0) {
            return;
        }

        const id = setInterval(() => savedCallback.current(), delay);

        return () => clearInterval(id);
    }, [delay]);
};

export default useInterval;
