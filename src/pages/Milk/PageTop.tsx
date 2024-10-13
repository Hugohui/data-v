import { getYesterdayDataStatistics } from "@/api/Milk";
import { PageTopStyle } from "./style";
import CountUp from "react-countup";
import { useState } from "react";
import { useIntervalRequest } from "@/hooks/useIntervalRequest";
import useEvent from "@/hooks/useEventHook";

const countDuration = 1

export const PageTop = () => {
    const { publish } = useEvent()
    const [data, setData] = useState<any>({})

    const getData = () => {
        getYesterdayDataStatistics().then((res) => {
            if (res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    const onInfoClick = () => {
        publish("onMilkProductLineClick", {})
    }

    return (
        <PageTopStyle>
            <div className="InfoItem canClick" onClick={onInfoClick}>
                昨日上厅羊
                <div className="Num">
                    <CountUp start={0} end={data.totalCount} duration={countDuration} separator="" decimals={2}></CountUp>
                </div>
                <div className="Unit">只</div>
            </div>
            <div className="InfoItem canClick" onClick={onInfoClick}>
                昨日总产奶量
                <div className="Num">
                    <CountUp start={0} end={data.totalMilk} duration={countDuration} separator="" decimals={2}></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
            <div className="InfoItem canClick" onClick={onInfoClick}>
                昨日最高产奶量
                <div className="Num">
                    <CountUp start={0} end={data.maxMilk} duration={countDuration} separator="" decimals={2}></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
            <div className="InfoItem canClick" onClick={onInfoClick}>
                昨日平均产奶量
                <div className="Num">
                    <CountUp start={0} end={data.avgMilk} duration={countDuration} separator="" decimals={2}></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
        </PageTopStyle>
    )
}