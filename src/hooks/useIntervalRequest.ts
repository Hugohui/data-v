import { useEffect } from "react"
import useInterval from "./useInterval"
import { TimeEnum } from "../enums/constantEnum";

export const useIntervalRequest = (fn: Function, delay?: number) => {
    useInterval(fn, delay || TimeEnum.REFRESH)

    useEffect(() => {
        fn()
    }, [])
}