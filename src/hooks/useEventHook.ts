import { useEffect } from "react"

let eventEmitter: any = {}


const useEvent = () => {
    // const eventEmitter: any = useRef({})

    // 订阅全局事件
    const subscribe = (eventName: string, callback: Function) => {
        if (!eventEmitter[eventName]) {
            eventEmitter[eventName] = []
        }
        eventEmitter[eventName].push(callback)
    }

    // 发布全局事件
    const publish = (eventName: string, ...args: any) => {
        (eventEmitter[eventName] || []).forEach((callback: Function) => callback(...args));
    }

    // 清除所有订阅
    const clear = () => {
        eventEmitter = {};
    };
    
    // 组件卸载时清除所有订阅
    useEffect(() => {
        return clear;
    }, []);


    return { subscribe, publish, clear}
}

export default useEvent