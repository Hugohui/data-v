import { FeedFlanInfoStyle, FeedPlanInfoItemStyle } from "./FeedFlanInfoStyle"

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
                    {info.value}<span className="unit">kg</span>
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