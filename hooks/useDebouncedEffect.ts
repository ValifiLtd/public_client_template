import { useEffect, useRef } from "react";

export function useDebouncedEffect(callback: () => any, deps: any[], timeout = 300) {
    const ignoreInitialCall = true;
    const data = useRef<any>({ firstTime: true });

    useEffect(() => {
        const { firstTime, clearFunc } = data.current;

        if (firstTime && ignoreInitialCall) {
            data.current.firstTime = false;
            return;
        }

        const handler = setTimeout(() => {
            if (clearFunc && typeof clearFunc === "function") {
                clearFunc();
            }
            data.current.clearFunc = callback();
        }, timeout);

        return () => {
            clearTimeout(handler);
        };
    }, [timeout, ...deps]);
}

export default useDebouncedEffect;
