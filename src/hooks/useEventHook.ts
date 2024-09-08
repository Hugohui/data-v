import { useEffect } from "react"

let eventEmitter: any = {}


const useEvent = () => {
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

    return { subscribe, publish }
}

export default useEvent