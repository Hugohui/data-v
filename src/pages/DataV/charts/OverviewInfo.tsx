import { useState } from "react"
import { InfoItemStyle } from "./OverviewInfoStyle"
import { getVisualDataStatistics } from "@/api/DataV"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import CountUp from "react-countup"


export const OverviewInfo = () => {

    const [data, setData] = useState<any>({})

    const getData = () => {
        getVisualDataStatistics().then((res: any) => {
            if (res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            <InfoItemStyle>
                <p className="Num">
                    <CountUp start={0} end={data.TotalStock}></CountUp>
                </p>
                <p className="Text">总存栏（只）</p>
            </InfoItemStyle>
            <InfoItemStyle>
                <p className="Num">
                    <CountUp start={0} end={data.NumberLactatSheep}></CountUp>
                </p>
                <p className="Text">泌乳羊（只）</p>
            </InfoItemStyle>
            <InfoItemStyle>
                <p className="Num">
                    <CountUp start={0} end={data.Yield}></CountUp>
                </p>
                <p className="Text">日产奶量（KG）</p>
            </InfoItemStyle>
            <InfoItemStyle>
                <p className="Num">
                    <CountUp start={0} end={data.dailyGain}></CountUp>
                </p>
                <p className="Text">日增重（KG/天）</p>
            </InfoItemStyle>
        </>
    )
}