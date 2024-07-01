import { useEffect, useRef } from "react";
import { TimeEnum } from "../enums/constantEnum";

const useInterval = (callback: Function, delay?: number) => {
    const callbackRef: any = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        let id = setInterval(() => {
            callbackRef.current();
        }, delay || TimeEnum.REFRESH)
        return () => clearInterval(id)
    }, [delay])
}

export default useInterval;