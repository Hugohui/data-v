import useEvent from "../../../hooks/useEventHook"
import { useEffect, useState } from "react"
import { SheepInfoProgrssStyle, FeedFlanInfoStyle, FeedPlanInfoItemStyle } from "./SheepInfoProgrssStyle"
import { getProcessCurrentState } from "@/api/SheepDetail"
import CountUp from "react-countup"

const FeedPlanInfoItem = (info: any) => {
    return (
        <FeedPlanInfoItemStyle>
            <div className={`icon icon-${info.icon}`}></div>
            <div className="main">
                <div className="label">{info.label}</div>
                <div className="value">
                    {info.type === 'text' ? info.value : <CountUp start={0} end={Number(info.value)} duration={1.5} separator="" decimals={2}></CountUp>}
                    {info.unit ? <span className="unit">{info.unit}</span> : ''}
                </div>
            </div>
        </FeedPlanInfoItemStyle>
    )
}

export const SheepInfoProgrss = () => {
    const { subscribe, publish } = useEvent()
    const [info, setInfo] = useState<any>({})
    const [data, setData] = useState<any>({})
    // const [progress, setProgress] = useState(0)

    const getData = () => {
        getProcessCurrentState({
            CowGuid: info.CowGuid
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                publish("onSheepStateChange", res?.data?.currentState)
                setData(res.data)
                // const index = res?.data?.StateList?.findIndex((item: string) => item.includes(res?.data?.currentState));
                // const stateListLen = res?.data?.StateList?.length;
                // const p = (index == -1 || stateListLen === 0) ? 0 : ((index + 1) / stateListLen);
                // setProgress(Math.min(p, 1) * 100)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [info.CowGuid])

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setInfo(data)
            }
        })
    }, [])

    return (
        <SheepInfoProgrssStyle>
            {/* <ProgrssStyle progress={progress}></ProgrssStyle>
            <div className="textWrap">
                {
                    data?.StateList?.map((item: string) => <div key={item} className="text">{item}</div>)
                }
            </div> */}
            <FeedFlanInfoStyle>
                <FeedPlanInfoItem label="当前阶段" value={data.currentState} type="text" icon="current-sheep"></FeedPlanInfoItem>
                <FeedPlanInfoItem label="预计年产量" value={data.NianChanNai} unit="kg" icon="current-sheep-milk"></FeedPlanInfoItem>
            </FeedFlanInfoStyle>
        </SheepInfoProgrssStyle>
    )
}