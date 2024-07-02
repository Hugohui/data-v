import { useState } from 'react'

import CountUp from "react-countup"

import { FeedFlanInfoStyle, FeedPlanInfoItemStyle } from "./FeedFlanInfoStyle"
import { getTodayStatisticalData } from '@/api/Feeding'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface FeedPlanInfoI {
    icon: string
    label: string
    value: string
}

const FeedPlanInfoItem = (info: FeedPlanInfoI) => {
    return (
        <FeedPlanInfoItemStyle>
            <div className={`icon icon-${info.icon}`}></div>
            <div className="main">
                <div className="label">{info.label}</div>
                <div className="value">
                    <CountUp start={0} end={Number(info.value)} duration={1.5} separator=""></CountUp>
                    <span className="unit">kg</span>
                </div>
            </div>
        </FeedPlanInfoItemStyle>
    )
}

export const FeedPlanInfo = () => {

    const [data, setData] = useState<any>({})

    const getData = () => {
        getTodayStatisticalData().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <FeedFlanInfoStyle>
            <FeedPlanInfoItem label="今日计划" value={data.PlanWeight} icon="plan-feed"></FeedPlanInfoItem>
            <FeedPlanInfoItem label="实际加料" value={data.ActualWeight} icon="real-feed"></FeedPlanInfoItem>
            <FeedPlanInfoItem label="实际撒料" value={data.DownActualWeight} icon="real-spread"></FeedPlanInfoItem>
        </FeedFlanInfoStyle>
    )
}