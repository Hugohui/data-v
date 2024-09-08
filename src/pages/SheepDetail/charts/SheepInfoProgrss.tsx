import useEvent from "../../../hooks/useEventHook"
import { useEffect, useState } from "react"
import { SheepInfoProgrssStyle, ProgrssStyle } from "./SheepInfoProgrssStyle"
import { getProcessCurrentState } from "@/api/SheepDetail"

export const SheepInfoProgrss = () => {
    const { subscribe, publish } = useEvent()
    const [info, setInfo] = useState<any>({})
    const [data, setData] = useState<any>({})
    const [progress, setProgress] = useState(0)

    const getData = () => {
        getProcessCurrentState({
            CowGuid: info.CowGuid
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                publish("onSheepStateChange", res?.data?.currentState)
                setData(res.data)
                const index = res?.data?.StateList?.findIndex((item: string) => item.includes(res?.data?.currentState));
                const stateListLen = res?.data?.StateList?.length;
                const p = (index == -1 || stateListLen === 0) ? 0 : ((index + 1) / stateListLen);
                setProgress(Math.min(p, 1) * 100)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [info.CowGuid])

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            console.log("=====d=====onSheepDetailSelectEmit=", data)
            if (data) {
                setInfo(data)
            }
        })
    }, [])

    return (
        <SheepInfoProgrssStyle>
            <ProgrssStyle progress={progress}></ProgrssStyle>
            <div className="textWrap">
                {
                    data?.StateList?.map((item: string) => <div key={item} className="text">{item}</div>)
                }
            </div>
        </SheepInfoProgrssStyle>
    )
}