import { FeedFlanInfoStyle, FeedPlanInfoItemStyle } from "./FeedFlanInfoStyle"
import CountUp from "react-countup"

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
    return (
        <FeedFlanInfoStyle>
            <FeedPlanInfoItem label="今日计划" value="5000000" icon="plan-feed"></FeedPlanInfoItem>
            <FeedPlanInfoItem label="实际加料" value="4000000" icon="real-feed"></FeedPlanInfoItem>
            <FeedPlanInfoItem label="实际撒料" value="3980000" icon="real-spread"></FeedPlanInfoItem>
        </FeedFlanInfoStyle>
    )
}